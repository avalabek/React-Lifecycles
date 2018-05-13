import React, {Component} from 'react';
import styled from "styled-components";

export default function loggify(Wrapped){

  let original ={};
  //store copies of functions here
  const methodsToLog = ["componentWillMount"];
  //note you should not do this in a production environment, this is jsut to learn
  methodsToLog.forEach((method)=> {
    if (Wrapped.prototype[method]){
      originals[method] = Wrapped.prototype[method]
    
    }
   Wrapped.prototype[method]= function(...args){
     let original = originals[method]
     console.groupCollapsed(`${Wrapped.displayName} called ${method}`)
      console.groupEnd();
      if (original){
        original = original.bind(this)
        original(...args)
      }
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