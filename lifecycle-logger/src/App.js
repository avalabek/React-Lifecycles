import React, { Component } from 'react';
import Button from "./Button";
import ButtonToggle from "./ButtonToggle";

class App extends Component {


  // state = {
  //   data: "No Data yet!",
  //   parentPoll: "No data yet"
  // }
handleClick(){
  let speech = "blah,blah,blah";
  alert(speech);

  
}

  render() {
    return (
      <div>
        <h1> hello world </h1>
        <Button 
          onClick={this.handleClick}
          
          />
         <ButtonToggle /> 
      </div>
    )
  }
}
export default App;
