const URL_BASE = 'http://localhost:3002/api';

const createRestaurant = (
  { nameRestaurant, address, neighborhood, phone, foodType },
  photo,
  token
) => {
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      nameRestaurant,
      address,
      neighborhood,
      phone,
      foodType,
      photo
    })
  };

  return fetch(`${URL_BASE}/restaurants`, payload);
};

export default createRestaurant;
