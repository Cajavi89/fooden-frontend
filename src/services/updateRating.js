const updateUser = (id, profilePhoto, token) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ profilePhoto })
  };

  return fetch(`http://localhost:3002/api/users/${id}`, payload);
};

export default updateUser;
