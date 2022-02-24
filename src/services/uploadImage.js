import axios from 'axios';

const uploadImageHandler = async (file, token) => {
  if (!token) {
    return console.log('NO HAY TOKEN!!!!');
  }
  const formData = new FormData();
  const baseURL = process.env.REACT_APP_API_URL;
  formData.append('file', file);

  const result = await axios.post(`${baseURL}/uploads/file`, formData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return result.data.url;
};

export default uploadImageHandler;
