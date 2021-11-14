import React from "react";

class Practice2 extends React.Component {
  state = {
    username: "cfmdev70"
  };
  
  handleUsername = (e) => (this.setState({username:  e.target.value}));

  render() {
    return (
      <>
        <p>Username: {this.state.username}</p>
        <p>
          <input onChange={this.handleUsername} type="text" placeholder={this.state.username} />
        </p>
      </>
    );
  }
}

export default Practice2;
