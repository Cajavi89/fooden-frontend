/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import {
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  UPLOAD_IMAGE,
  GET_ALL_RESTAURANTS,
  SET_REVIEW,
  SET_CURRENT_RESTAURANT,
  SET_RATING
} from './constants';
import { loginAccount } from '../services/auth';
import getUserByEmail from '../services/getUserByEmail';
import updateUser from '../services/updateUser';
import getRestaurantByIdFromDB from '../services/getRestaurantByIdFromDB'

import jwt_decode from 'jwt-decode';
import getAllRestaurants from '../services/getAllRestaurants';
import updateRestaurantCommments from '../services/updateRestaurantComments';
import updateRestaurantRating from '../services/updateRestaurantRating';

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

export const getAllRestaurantsHandler = async (dispatch) => {
  try {
    const getRestaurants = await getAllRestaurants();
    const response = await getRestaurants.json();
    dispatch({ type:GET_ALL_RESTAURANTS, payload: response })
  } catch (error) {
    return error.message
  }

};

export const updateReviewHandler = async (dispatch, restaurantId, comment,fullName) =>{
  try {
    const response = await updateRestaurantCommments(restaurantId,comment,fullName);
    const data = await response.json()
    dispatch({type: SET_REVIEW, payload:data})
  } catch (error) {
    return error.message
  }
}

export const getRestaurantByIdHandler = async (dispatch,id) =>{
  try {
    const response = await getRestaurantByIdFromDB(id);
    const data = await response.json()
    if(response.ok){
      dispatch({type: SET_CURRENT_RESTAURANT,payload:data})
    }
  } catch (error) {
    return error.message
  }
};

export const updateRatingHandler = async (dispatch, id, rating) => {
  try {
    const response = await updateRestaurantRating(id, rating);
    const data = await response.json();
    if(response.ok){
      dispatch({type:SET_RATING, payload: data})
    }
  } catch (error) {
    return error.message
  }
};
