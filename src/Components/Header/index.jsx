import React from 'react';
import MenuComponent from '../MenuComponent';

const Header = () => {
  return (
    <header className="fixed bottom-3 w-full flex justify-center items-center">
      <MenuComponent />
    </header>
  );
};

export default Header;
