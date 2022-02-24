const updateRestaurantCommments = (id, comment, user) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment, user })
  };

  return fetch(`http://localhost:3002/api/restaurants/${id}`, payload);
};

export default updateRestaurantCommments;
