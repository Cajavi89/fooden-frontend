import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllRestaurantsHandler } from '../../context/actions';
import { useAppState, useAppDispatch } from '../../context/store';
import CategoryListItems from '../CategoryListItems';
import Loader from '../Loader';
import './styles.scss';

const SearchResults = () => {
  const { search = 'italiana' } = useParams();
  const dispatch = useAppDispatch();
  const state = useAppState();
  const { restaurants } = state;
  useEffect(() => {
    getAllRestaurantsHandler(dispatch);
  }, []);

  return (
    <div className="min-height-comp mb-6">
      <h2 className="m-4 text-lg text-indigo-600">{`Restaurantes filtrados por : ${search}`}</h2>
      <div>
        {!restaurants && <Loader />}
        {restaurants
          ?.filter(
            ({ foodType }) =>
              foodType.toLowerCase() === search.toLocaleLowerCase()
          )
          .map((restaurant) => {
            return <CategoryListItems key={Math.random()} props={restaurant} />;
          })}
      </div>
    </div>
  );
};

export default SearchResults;
