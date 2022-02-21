/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import axios from 'axios';
import { useAppDispatch, useAppState } from '../../context/store';
import uploadImageHandler from '../../services/uploadImage';
import { updateProfilePhoto } from '../../context/actions';

const UploadImagesForm = ({ showUpload, setShowUpload }) => {
  const [file, setFile] = useState(null);
  const { user } = useAppState();
  const dispatch = useAppDispatch();

  const onChangeFile = (e) => {
    console.log('onChangee', e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      return null;
    }
    const linkPhoto = await uploadImageHandler(file);
    updateProfilePhoto(dispatch, user.email, linkPhoto);
    setShowUpload(!showUpload);
  };

  return (
    <>
      <div className="flex justify-center bg-white rounded-md mt-2">
        <div className="mb-3 w-96 p-3">
          <label
            htmlFor="formFileSm"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Cambiar foto de perfil
          </label>
          <input
            onChange={onChangeFile}
            className="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="formFileSm"
            type="file"
          />
          <div className="flex justify-evenly">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3 ml-2"
              onClick={onSubmit}
            >
              Enviar
            </button>
            <button
              className="text-indigo-700 font-bold py-2 px-4 rounded border border-indigo-600 focus:outline-none focus:shadow-outline mt-3 ml-2"
              onClick={() => setShowUpload(!showUpload)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImagesForm;
