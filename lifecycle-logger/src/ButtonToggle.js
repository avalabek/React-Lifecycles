import React, { Component } from 'react';

class ButtonToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }
  render() {
    return(
      <div>
        <button onClick={this.eventHandler}>{this.state.toggle ? 'Click Me' : 'Reset'}</button>
      </div>
    );
  }
}
export default ButtonToggle;
