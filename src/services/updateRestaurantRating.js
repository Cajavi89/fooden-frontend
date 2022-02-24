const updateRestaurantRating = (id, rating) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ rating })
  };

  return fetch(`http://localhost:3002/api/restaurants/${id}`, payload);
};

export default updateRestaurantRating;
