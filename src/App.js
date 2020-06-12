import React from "react";
import SignUp from "./components/users/SignUp";
import Login from "./components/users/Login";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
        <SignUp />
      </div>
    );
  }
}

export default App;
