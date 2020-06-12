import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to='/login'>Log In</Link>
      Or
      <Link to='/signup'>Sign Up</Link>
    </div>
  );
};

export default Landing;
