import React from 'react';
import CardRestaurant from './Components/CardRestaurant';
import Categories from './Components/Categories';

import Header from './Components/Header';
import LogoComponent from './Components/LogoComponent';
import TitleSection from './Components/TitleSection';
import WhereToday from './Components/WhereToday';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="h-screen p-1  bg-slate-200 ">
      <LogoComponent />
      <Header />
      <WhereToday />
      <TitleSection title="Recomendado de hoy" />
      <CardRestaurant />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
