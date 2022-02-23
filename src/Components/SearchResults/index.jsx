import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppState } from '../../context/store';
// import filterData from '../../services/filterData';
import CategoryListItems from '../CategoryListItems';

const SearchResults = () => {
  const { search } = useParams();
  const state = useAppState();
  const { restaurants } = state;
  const filtered = restaurants.filter(
    ({ foodType }) => foodType.toLowerCase() === search.toLocaleLowerCase()
  );
  return (
    <div className="h-96">
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
