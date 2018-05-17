class Btn extends React.Component {
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
        <button onClick={this.eventHandler} className={this.state.toggle ? '' : 'red'}>{this.state.toggle ? 'Add a class' : 'Remove a class'}</button>
      </div>
    );
  }
}

ReactDOM.render(<Btn />, document.getElementById("root"));