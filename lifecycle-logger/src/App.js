import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <h1>Hello World </h1>
    );
  }
}

function myTestWrapper(WrappedComponent){
  return class extends Component {
    render(){
      return (
        <div style={{backgroundColor:"lightBlue"}}>

          <WrappedComponent />
          </div>
      )
    }
  }
}

App = myTestWrapper(App);

export default App;
