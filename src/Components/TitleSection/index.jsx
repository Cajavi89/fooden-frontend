import React from 'react';
import PropTypes from 'prop-types';

const TitleSection = ({ title }) => {
  return (
    <h2 className="text-xl text-indigo-500 p-3 mt-3 font-semibold">{title}</h2>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string
};

export default TitleSection;
