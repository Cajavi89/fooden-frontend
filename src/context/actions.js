/* eslint-disable camelcase */
import {
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  SET_LOADING
} from './constants';
import { loginAccount } from '../services/auth';
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
