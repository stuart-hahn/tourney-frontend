import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import SignUp from "./components/users/SignUp";
import Login from "./components/users/Login";
import Logout from "./components/users/Logout";
import Landing from "./components/Landing";

import { getCurrentUser } from "./actions/userActions";

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {loggedIn ? <Logout /> : <Login />}
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route path='/' component={Landing} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
