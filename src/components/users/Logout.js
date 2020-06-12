import React from "react";
import { connect } from "react-redux";

import { logout } from "../../actions/userActions";

const Logout = ({ logout }) => {
  const onClickLogout = () => {
    return logout();
  };
  return <button onClick={onClickLogout}>Log Out</button>;
};

export default connect(null, { logout })(Logout);
