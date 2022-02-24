const getRestaurantByIdFromDB = (id) => {
  const payload = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`http://localhost:3002/api/restaurants/${id}`, payload);
};

export default getRestaurantByIdFromDB;
