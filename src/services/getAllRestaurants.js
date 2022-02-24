const getAllRestaurants = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const baseURL = process.env.REACT_APP_API_URL;

  return fetch(`${baseURL}/restaurants`, payload);
};

export default getAllRestaurants;
