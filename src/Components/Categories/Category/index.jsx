import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ categoryName }) => {
  return (
    <Link to={`/SearchResults/${categoryName}`}>
      <h3 className="text-center bordered shadow hover:scale-105 p-3">
        {categoryName}
      </h3>
    </Link>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string
};

export default Category;
