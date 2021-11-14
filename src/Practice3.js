import React from "react";

const UserForm = (props) => (
  <p>
    <label htmlFor={props.id}>{props.label}</label>:
    <input id={props.id} type="text" onChange={props.onChange} />
  </p>
);

class Practice3 extends React.Component {
  state = {
    first: "First",
    last: "Last"
  };

  handleFirst = e => {
    this.setState({ first: e.target.value });
  };

  handleLast = e => {
    this.setState({ last: e.target.value });
  };

  render() {
    return (
      <>
        <h2>
          {this.state.first} {this.state.last}
        </h2>

        <UserForm id = "firstName" label = "First Name" onChange = {this.handleFirst} />
        <UserForm id = "lastName" label = "Last Name" onChange = {this.handleLast} />
      </>
    );
  }
}

export default Practice3;
