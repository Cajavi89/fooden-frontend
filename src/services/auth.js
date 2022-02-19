/* eslint-disable no-useless-catch */
const URL_BASE = 'http://localhost:3002/api';

const loginAccount = (email, password) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  };
  return fetch(`${URL_BASE}/users/login`, payload);
};

export { loginAccount };
