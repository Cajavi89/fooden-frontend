import React from 'react';
import { Outlet } from 'react-router-dom';

import LogoComponent from '../../Components/LogoComponent';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const App = () => {
  return (
    <>
      <LogoComponent />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
