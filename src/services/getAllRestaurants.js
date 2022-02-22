const URL_BASE = 'http://localhost:3002/api';
const getAllRestaurants = () => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(`${URL_BASE}/restaurants`, payload);
};

export default getAllRestaurants;
