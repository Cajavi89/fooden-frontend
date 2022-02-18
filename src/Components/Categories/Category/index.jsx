import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryName }) => {
  return (
    <h3 className="text-center bordered shadow hover:scale-105 p-3">
      {categoryName}
    </h3>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string
};

export default Category;
