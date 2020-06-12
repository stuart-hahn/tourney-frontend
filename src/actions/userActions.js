const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  user,
});

export const signUp = (credentials) => {
  return (dispatch) => {
    const body = {
      user: credentials,
    };
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((user) => dispatch(setCurrentUser(user)));
  };
};
