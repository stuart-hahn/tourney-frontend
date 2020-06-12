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
      credentials: "include",
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

export const login = (credentials) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sessions/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then(console.log);
  };
};
