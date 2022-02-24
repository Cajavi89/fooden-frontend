/* eslint-disable no-debugger */
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
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/users/userEmail`, payload);
};

export default getUserByEmail;
