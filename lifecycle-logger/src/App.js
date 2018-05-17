// import React, { Component } from 'react';
// import Button from "./Button";
// import ButtonToggle from "./ButtonToggle";
// import Stateless from "./Stateless";
// import StatelessButton from "./StatelessButton";

// class App extends Component {


//   // state = {
//   //   data: "No Data yet!",
//   //   parentPoll: "No data yet"
//   // }
// handleClick(){
//   let speech = "blah,blah,blah";
//   alert(speech);

  
// }

//   render() {
//     return (
//       <div>
//         <h1> hello world </h1>
//         <Stateless />
//         <StatelessButton />
//         <Button 
//           onClick={this.handleClick}
          
//           />
//          <ButtonToggle /> 
//       </div>
//     )
//   }
// }
// export default App;
import React, {Component} from "react";
import StatelessButton from "./StatelessButton";
import Input from "./Input";

class App extends Component{

  render() {
    return (
      <div>
        <StatelessButton />
        <Input />

      </div>  
    )
  }
}
export default App;