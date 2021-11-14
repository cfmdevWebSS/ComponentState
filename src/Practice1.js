import React from "react";

class Practice1 extends React.Component {
  state = {
    userName: "Big Dawg"
  };
  /* 
    1. Create a state object
    2. Create a username property with a value of some username
  */
  render() {
    return <p>{this.state.userName}</p>;
  }
}

export default Practice1;
