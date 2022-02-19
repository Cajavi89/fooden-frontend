const URL_BASE = 'http://localhost:3002/api';

const registerAccount = ({ firstName, lastName, email, password }) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ firstName, lastName, email, password })
  };

  return fetch(`${URL_BASE}/users`, payload);
};

export default registerAccount;
