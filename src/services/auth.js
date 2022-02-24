/* eslint-disable no-useless-catch */

const loginAccount = (email, password) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  };
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/users/login`, payload);
};

export { loginAccount };
