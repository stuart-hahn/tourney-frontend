const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  user,
});

const clearCurrentUser = () => ({
  type: "CLEAR_CURRENT_USER",
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
      .then((user) => dispatch(setCurrentUser(user)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sessions/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then(dispatch(clearCurrentUser()));
  };
};

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sessions/get_current_user", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    })
      .then((response) => response.json())
      .then((user) => dispatch(setCurrentUser(user)));
  };
};
