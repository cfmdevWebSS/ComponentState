import React from "react";

const Header = (props) => {
  return (<h2>{props.text}</h2>);
}

const Button = (props) => {
  return (<input type="button" value={props.text} onClick={props.onClick} />);
}

class Practice4 extends React.Component {
  state = {
    count: 0
  }

  increment = (e) => {
    this.setState({count: this.state.count + 1});
  }

  decrement = (e) => {
    this.setState({count: this.state.count - 1});
  }

  reset = () => this.setState({count: 0});

  render() {
    return (
      <>
        <Header text={this.state.count} />
        <Button onClick={this.decrement} text="-" />
        <Button onClick={this.increment} text="+" />
        <Button onClick={this.reset} text="Reset" />
      </>
    );
  }
}

export default Practice4;
