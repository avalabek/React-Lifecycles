// import React from 'react';

// // const StatelessButton =()=>{
// //   return <button> Stateless Button</button>
// // }


// // import React from 'react';

// const StatelessButton =()=>{
//   return <h1 style={{textAlign:"center", color:"blue"}}> Stateless Heading</h1>
// }

// export default StatelessButton;

// 

// import React from "react";

// const StatelessButton =()=> {
//   function handleClick(){
//     alert("This is an example of a stateless button!");
//   }
//   return <button
//           onClick = {handleClick}
//           style = {{backgroundColor:"linen", color:"lightBlue", fontSize:"30px" }}
//           > stateless...........................</button>;
// }

// export default StatelessButton; 

import React from "react";

const StatelessButton =()=>{
  function handleClick(){
    alert("Hello! I am a stateless clickable button.");
  }
  return <button
          onClick = {handleClick}
          style = {{color:"lightBlue", backgroundColor: "navy", fontSize:"60px", marginLeft:"40%"}}
  >
          Button
          </button>;
}
export default StatelessButton;