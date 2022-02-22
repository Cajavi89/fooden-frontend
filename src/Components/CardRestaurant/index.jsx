import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useAppDispatch, useAppState } from '../../context/store';
import { getAllRestaurantsHandler } from '../../context/actions';

const CardRestaurant = () => {
  const dispatch = useAppDispatch();
  const state = useAppState();
  useEffect(() => {
    getAllRestaurantsHandler(dispatch);
  }, []);
  console.log(
    '🚀 ~ file: index.jsx ~ line 9 ~ CardRestaurant ~ state',
    state.restaurants
  );
  return (
    <div className="w-full h-80 bg-indigo-200">
      {/* {data.map((res) => console.log(res))} */}
    </div>
  );
};

CardRestaurant.propTypes = {
  props: PropTypes.object
};

export default CardRestaurant;
