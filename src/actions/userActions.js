export const signUp = (userData) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then(console.log);
  };
};
