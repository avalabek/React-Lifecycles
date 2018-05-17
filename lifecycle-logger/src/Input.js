import React, {Component} from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
// preserve the initial state in a new object
    this.initialState = this.state 
  }

resetForm = () => {
  this.setState(this.initialState)
}
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Hello ' + this.state.value);
    event.preventDefault();
  }
  

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        
        
        >
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    );
  }
}

export default Input;