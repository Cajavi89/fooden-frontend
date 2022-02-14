import React from 'react';

import Header from './Components/Header';
import LogoComponent from './Components/LogoComponent';
import WhereToday from './Components/WhereToday';

function App() {
  return (
    <div className="h-screen p-1  bg-slate-200 ">
      <LogoComponent />
      <Header />
      <WhereToday />
    </div>
  );
}

export default App;
