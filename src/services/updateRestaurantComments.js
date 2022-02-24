const updateRestaurantCommments = (id, comment, user) => {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ comment, user })
  };
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/restaurants/${id}`, payload);
};

export default updateRestaurantCommments;
