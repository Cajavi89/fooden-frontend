/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import {
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  UPLOAD_IMAGE
} from './constants';
import { loginAccount } from '../services/auth';
import getUserByEmail from '../services/getUserByEmail';
import updateUser from '../services/updateUser';

import jwt_decode from 'jwt-decode';

export const loginUser = async (dispatch, email, password) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await loginAccount(email, password);
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('tokenFooden', data);
      const decoded = jwt_decode(data);
      dispatch({ type: LOGIN_USER, payload: decoded });
    }
  } catch (error) {
    console.log(error);
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const getUserFromLocalStorage = (dispatch) => {
  const token = localStorage.getItem('tokenFooden');
  if (token) {
    const decoded = jwt_decode(token);
    dispatch({ type: GET_USER_FROM_LOCALSTORAGE, payload: decoded });
  }
};

export const logOutUser = (dispatch) => {
  localStorage.removeItem('tokenFooden');
  dispatch({ type: LOGOUT_USER, payload: null });
};

export const updateProfilePhoto = async (dispatch, userEmail, urlPhoto) => {
  try {
    const getUser = await getUserByEmail(userEmail);
    const user = await getUser.json();
    const validateToken = localStorage.getItem('tokenFooden');
    const { _id } = user;
    const response = await updateUser(_id, urlPhoto,validateToken);
    const token = await response.json();
    if(response.ok){
      localStorage.setItem('tokenFooden', token);
      const decoded = jwt_decode(token);
      dispatch({ type: UPLOAD_IMAGE, payload: decoded });
    }
  }catch (error) {
    console.log(error.message);
  }
};

