import React, { Component } from 'react';
import loggify from "./loggify";


class App extends Component {

  static displayName = "App";

  fetchData = () => {
    console.log("Going to fetch data!");
    setTimeout(
      () => {
        console.log("Data retrieved");
        this.setState({
          data: Math.random()
        })
      }, 1500
    )
  }
componentDidMount(){
  this.fetchData()
}
  render(){
    console.log(this.state);
    return (
      <div>
          Hello World
      </div>    
    )
  }
}

App = loggify(App);

export default App;
