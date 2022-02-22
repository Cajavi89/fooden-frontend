import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

const categories = [
  'Tipica',
  'Italiana',
  'Japonesa',
  'Comida Rapida',
  'Indu',
  'Griega',
  'Peruana',
  'Argentina',
  'Otra'
];

const Categories = (props) => {
  return (
    <section className="w-full grid grid-cols-3 font-semibold gap-5 p-3">
      {categories.map((category) => (
        <a href={`category/${category}`} key={Math.random()}>
          <Category categoryName={category} />
        </a>
      ))}
    </section>
  );
};

Categories.propTypes = {
  props: PropTypes.array
};

export default Categories;
