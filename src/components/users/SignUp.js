import React from "react";

const SignUp = () => {
  return (
    <form>
      <label>Username:</label>
      <input type='text' placeholder='Username...' />
      <label>Password:</label>
      <input type='password' placeholder='Password...' />
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUp;
