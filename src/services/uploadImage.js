import axios from 'axios';

const uploadImageHandler = async (file) => {
  const formData = new FormData();

  formData.append('file', file);

  const result = await axios.post(
    'http://localhost:3002/api/uploads/file',
    formData
  );
  return result.data.url;
};

export default uploadImageHandler;
