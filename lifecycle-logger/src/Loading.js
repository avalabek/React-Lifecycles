import React, {Component} from "react";

var styles = {
  content: {
    textAlign: "center",
    fontSize: "35px"
  }
}



class Loading extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: props.text
    }
  }
  render(){
    return (
      <p style={styles.content}>
        {this.state.text}
        </p>
    )
  }


}
Loading.defaultProps ={ 
  text: "Loading"
};

export default Loading;