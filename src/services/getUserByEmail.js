/* eslint-disable no-debugger */
// const URL_BASE = 'http://localhost:3002/api';
const getUserByEmail = () => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'cajavi89@gmail.com'
    })
  };
  return fetch(`http://localhost:3002/api/users/userEmail`, payload);
};

export default getUserByEmail;
