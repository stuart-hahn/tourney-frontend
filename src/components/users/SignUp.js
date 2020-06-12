import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/userActions";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  // onSubmitForm = (event) => {
  //   event.preventDefault();
  //   this.props.signUp(this.state);
  // };

  onChangeInput = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label>Username:</label>
          <input type='text' placeholder='Username...' />
          <label>Password:</label>
          <input type='password' placeholder='Password...' />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(null, signUp)(SignUp);
