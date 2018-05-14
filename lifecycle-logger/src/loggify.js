import React, {Component} from 'react';
import styled from "styled-components";

// setting state is an asynch action
// there are many ways to set state

// //es6 concise
// this.setState({ someKey: newValue})
// //es7 more concise
// this.setState({someKey})

//use expanded version to avoid problems with set state
// this.setState(
//   (prevState, props) => {
//     //perform any actions here and ahve access to previous state
//     return {
//       // new object
//     }
//   },
// ()=> {
//   //my callback function
// }
// )





export default function loggify(Wrapped){

  let originals ={};
  //store copies of functions here
  const methodsToLog = [
    "componentWillMount", 
    "componentDidMount", 
    "componentWillUnmount",
    "componentWillReceiveProps"
  ];
  //note you should not do this in a production environment, this is jsut to learn
  methodsToLog.forEach((method)=> {
    if (Wrapped.prototype[method]){
      originals[method] = Wrapped.prototype[method]
    
    }
   Wrapped.prototype[method]= function(...args){
     let original = originals[method]
     console.groupCollapsed(`${Wrapped.displayName} called ${method}`)
      
     if (method === 'componentWillReceiveProps'){
       console.log("nextProps", args[0])
     }
     
     
     console.groupEnd();
      if (original){
        original = original.bind(this)
        original(...args)
      }
    } 
//do not do below in production environment for educational purposes only esp line 55
    Wrapped.prototype.setState = function(partialState, callback){
      console.groupCollapsed(`$Wrapped.displayName} setState`);
      console.log('partialSTate', partialState);
      console.log('callback', callback);
      console.groupEnd();
      this.updater.enqueueSetState(this,partialState, callback, 'setState')
    }
  })


  return class extends Component {
    render(){
      return (
        <LoggerContainer>
          <H2>
            {Wrapped.displayName} is now loggified.
          </H2>
          <Wrapped 
            {...this.props}
          />

        </LoggerContainer>
      )
    }
  }
}
//to use styled components put it inside ` had to yarn install styled-components
const LoggerContainer = styled.div`
  background-color: linen;
  border: 2px lightBlue;
  border-radius: 5px;
`
LoggerContainer.displayName = "LoggerContainer";

const H2 = styled.h2 `
color: blueviolet;
`
H2.displayName = "H2";