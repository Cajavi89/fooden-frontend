/* eslint-disable react/prop-types */
import React, { createContext, useReducer, useContext } from 'react';
import {
  GET_USER_FROM_LOCALSTORAGE,
  LOGIN_USER,
  LOGOUT_USER,
  SET_LOADING,
  UPLOAD_IMAGE,
  GET_ALL_RESTAURANTS,
  SET_REVIEW,
  SET_RATING,
  SET_CURRENT_RESTAURANT
} from './constants';

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const initialState = {
  isLoading: false,
  user: null,
  restaurants: [],
  currentRestaurant: {}
};

function AppReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case GET_USER_FROM_LOCALSTORAGE: {
      return {
        ...state,
        user: action.payload
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        user: action.payload
      };
    }

    case UPLOAD_IMAGE: {
      return {
        ...state,
        user: action.payload
      };
    }

    case GET_ALL_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload
      };
    }

    case SET_REVIEW: {
      return {
        ...state,
        currentRestaurant: action.payload
      };
    }

    case SET_CURRENT_RESTAURANT: {
      return {
        ...state,
        currentRestaurant: action.payload
      };
    }

    case SET_RATING: {
      return {
        ...state,
        currentRestaurant: action.payload
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a AppProvider');
  }

  return context;
};

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within a AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
