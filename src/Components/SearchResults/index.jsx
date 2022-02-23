import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../../context/store';
import CategoryListItems from '../CategoryListItems';
import './styles.scss';

const SearchResults = () => {
  const { search } = useParams();
  const state = useAppState();
  const { restaurants } = state;
  const filtered = restaurants.filter(
    ({ foodType }) => foodType.toLowerCase() === search.toLocaleLowerCase()
  );
  return (
    <div className="min-height-comp mb-6">
      <h2 className="m-4 text-lg text-indigo-600">{`Restaurantes filtrados por : ${search}`}</h2>
      <h2>
        {filtered?.map((restaurant) => {
          return <CategoryListItems key={Math.random()} props={restaurant} />;
        })}
      </h2>
    </div>
  );
};

export default SearchResults;
