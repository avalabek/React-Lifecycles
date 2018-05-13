import React, {Component} from 'react';
import styled from "styled-components";

export default function loggify(Wrapped){



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