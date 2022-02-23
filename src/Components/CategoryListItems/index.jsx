/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
// import RestaurantDetails from '../RestaurantDetails';

const CategoryListItems = ({ props }) => {
  const { photo, nameRestaurant, neighborhood, _id } = props;

  return (
    <Link to={`/restaurant-details/${_id}`}>
      <article className="flex items-start space-x-6 p-6 bg-indigo-200 mb-2 rounded-sm shadow-md hover:scale-105 transition-all ease-in duration-200 cursor-pointer ">
        <img
          src={photo}
          alt={nameRestaurant}
          width="120"
          height="88"
          className="flex-none rounded-md bg-slate-100"
        />
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-900 truncate pr-20">
            {nameRestaurant}
          </h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-indigo-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
              </dt>
              {/* <dd>{movie.starRating}</dd> */}
            </div>
            <div>
              <dt className="sr-only">Rating</dt>
              {/* <dd className="px-1.5 ring-1 ring-slate-200 rounded">{rating}</dd> */}
            </div>
            <div className="ml-2 flex">
              <span className="mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-map"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                  />
                </svg>
              </span>
              <span>{`Barrio: ${neighborhood}`}</span>
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="mx-2 text-slate-300"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {/* {movie.genre} */}
              </dd>
            </div>
            <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  fill="currentColor"
                  className="mx-2 text-slate-300"
                  aria-hidden="true"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {/* {movie.runtime} */}
              </dd>
            </div>
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              {/* <dd className="text-slate-400">{movie.cast}</dd> */}
            </div>
          </dl>
        </div>
      </article>
    </Link>
  );
};

export default CategoryListItems;
