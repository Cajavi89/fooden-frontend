const registerAccount = ({ firstName, lastName, email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  };
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/users`, payload);
};

export default registerAccount;
