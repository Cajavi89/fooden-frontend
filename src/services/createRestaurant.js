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
  const baseURL = process.env.REACT_APP_API_URL;
  return fetch(`${baseURL}/restaurants`, payload);
};

export default createRestaurant;
