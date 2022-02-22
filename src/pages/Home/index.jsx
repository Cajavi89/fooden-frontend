import React from 'react';
import CardRestaurant from '../../Components/CardRestaurant';
import Categories from '../../Components/Categories';
import TitleSection from '../../Components/TitleSection';
import WhereToday from '../../Components/WhereToday';

function App() {
  return (
    <div className="p-1  bg-slate-200 ">
      <WhereToday />
      <TitleSection title="Recomendado de hoy" />
      <CardRestaurant />
      <Categories />
    </div>
  );
}

export default App;
