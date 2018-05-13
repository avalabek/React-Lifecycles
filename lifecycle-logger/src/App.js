import React, { Component } from 'react';
import loggify from "./loggify";


class App extends Component {

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
