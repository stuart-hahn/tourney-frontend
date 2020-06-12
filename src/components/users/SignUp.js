import React from "react";
import { connect } from "react-redux";
import { signUp } from "../../actions/userActions";

class SignUp extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.signUp(this.state);
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor='username'>Username:</label>
          <input
            onChange={this.onChangeInput}
            value={this.state.username}
            name='username'
            type='text'
            placeholder='Username...'
          />
          <label htmlFor='password'>Password:</label>
          <input
            onChange={this.onChangeInput}
            value={this.state.password}
            name='password'
            type='password'
            placeholder='Password...'
          />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { signUp })(SignUp);
