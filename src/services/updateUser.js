const updateUser = (id, profilePhoto, token) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ profilePhoto })
  };
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/users/${id}`, payload);
};

export default updateUser;
