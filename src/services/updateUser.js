const updateUser = (id, infoToUpdate) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ infoToUpdate })
  };

  return fetch(`http://localhost:3002/api/users/${id}`, payload);
};

export default updateUser;
