import React, { Component } from 'react';


class App extends Component {


  // state = {
  //   data: "No Data yet!",
  //   parentPoll: "No data yet"
  // }
  

  render(){
    const buttonStyles = {
      color: "pink",
      backgroundColor: "red"
    }
    

    return (
      <div>
      <button
        onClick={this.props.onClick}
        style= {buttonStyles}
      > 
      button
      </button>
      </div>    
    );
  }
}
export default App;
