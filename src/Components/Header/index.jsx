import React from 'react';
import MenuComponent from '../MenuComponent';
import './styles.scss';

const Header = () => {
  return (
    <header className=" sticky top-position-sticky  w-full flex justify-center items-center  z-50">
      <MenuComponent />
    </header>
  );
};

export default Header;
