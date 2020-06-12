import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/userActions";

class LogIn extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  onChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <h1>Log In</h1>
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
          <button type='submit'>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(LogIn);
