/* eslint-disable no-debugger */
const URL_BASE = 'http://localhost:3002/api';
const getUserByEmail = (email) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email
    })
  };
  return fetch(`${URL_BASE}/users/userEmail`, payload);
};

export default getUserByEmail;
