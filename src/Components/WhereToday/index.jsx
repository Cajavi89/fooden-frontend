import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WhereToday = () => {
  const [search, setSearch] = useState(null);

  const onChangeHandler = (e) => {
    const searchTyped = e.target.value;
    setSearch(searchTyped);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler} className="flex justify-center">
      <input
        className="p-2 mt-5 w-3/4 rounded-md placeholder-indigo-500
        text-indigo-600
        hover:bg-gray-100 focus:outline-none focus:no-underline focus:text-indigo-600"
        type="search"
        name="filtrar"
        placeholder="¿Qué quieres comer hoy?"
        onChange={onChangeHandler}
      />
      <Link to={`/searchResults/${search}`}>
        <span
          className="input-group-text flex items-center px-3 py-1.5 mt-5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded cursor-pointer"
          id="btn-search"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            className="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            // onClick={onSubmitHandler}
          >
            <path
              fill="text-indigo-900"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </span>
      </Link>
    </form>
  );
};

export default WhereToday;
