import React, { Component } from 'react';
import loggify from "./loggify";


class App extends Component {

  static displayName = "App";

  state = {
    data: "No Data yet!",
    parentPoll: "No data yet"
  }
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
  this.createParentPoll()
  const canvasCtx = this.refs.appCanvas.getContext('2d');
  canvasCtx.fillStyle = "lightBlue";
  canvasCtx.arc(75,75,50,0, 2 * Math.PI)
  canvasCtx.fill()
}

  createParentPoll =() => {
    this.pollInterval = setInterval(
      ()=> {
        this.setState ({parentPoll: getRandomInt(1,5)})
      },
      1000
    )
  }

  render(){
    console.log(this.state);
    let {showPollChild, parentPoll, data} =this.state
    return (
      <div>
          Hello World
          <h4> {data}</h4>
          <h4>{parentPoll}</h4>
          <canvas
            ref={"appCanvas"}
            height={200}
            width={200}
            />
          <button
            onClick={()=>
            this.setState((prevState)=> {
              return {
                showPollChild: !prevState.showPollChild
              }
            })
          }
          >
          {(showPollChild) ? "Hide" : "Show"} PollChild
          </button>
          {(showPollChild) ? (
          <PollChild
            parentPoll = {parentPoll}
          /> ): null}    
      </div>    
    )
  }
}
//parent component is ready to show pollchild child component
class PollChild extends Component {
  static displayNmae = "PollChild";
  //another way to initialize state w/o constructor is :
  state = {
    poll: Math.random()
  }
  componentDidMount(){
    this.pollData()
  }
  componentWillUnmount(){
    clearInterval(this.pollInterval);
  }
  pollData = () => {
    this.pollInterval = setInterval(
      ()=>{
        console.log("Poll!")
        this.setState({
          poll:Math.random()
        })
      },
      1000
    )
  }
    //pollChild's render function
    render(){
      return(
        <div>
        <h4>poll {this.state.poll}</h4>
        <h4>parentPoll: {this.props.parentPoll}</h4>
        </div>
      )
    }

}
function getRandomInt(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}

App = loggify(App);
PollChild = loggify(PollChild);

export default App;
