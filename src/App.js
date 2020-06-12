import React from "react";
import { connect } from "react-redux";

import SignUp from "./components/users/SignUp";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";

import { getCurrentUser } from "./actions/userActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div>
        <Logout />
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser })(App);
