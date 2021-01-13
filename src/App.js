import React, { Component } from 'react';



class assignment6 extends Component {
  constructor() {
    super()
    this.state = {
    
      zip: "",
      zipLocation: [],
      isThere: false
    }

    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event) {
        
    this.setState({
      zip: event.target.value

    })
    
   // let theZip = this.target.value;
   if(event.target.value >= 10000){
    fetch("http://ctp-zip-api.herokuapp.com/zip/"+event.target.value)
    .then(res => {
      if(res.ok)
      {
        this.setState({isThere: true})
        res.json()
        .then((result) => {     
        this.setState({zipLocation: [...result]})
        })
      }
      else
      this.setState({isThere: false}) })
    
   
    }
  }

l
render() {


return (
   <form>
    <div className="App">
        <header className="App-header">
        <h1>Zip Code</h1>
        </header>      
    </div>
    <input type="text" name="zip" placeholder="ZipCode" onChange={this.handleChange} />
    <br />
    {<h2>{this.state.isThere?  'Results':'No results' }</h2>}
     {this.state.isThere? this.state.zipLocation.map(item =>(
     <div key = {item.RecordNumber} id = "stateTable">
     <div id = "top">{item.City}, {item.State}
     <div id = "bottom">
      Country: {item.Country}
      <br></br>
      Location: {item.Location}
      <br></br>
      Population: {item.EstimatedPopulation}
      <br></br>
      Wages: {item.TotalWages}
      <br></br>
      <br></br>
      </div></div></div>
     )):''}

            
             </form>
)
}
}

  export default assignment6


