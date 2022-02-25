import React from 'react';
import { Link } from 'react-router-dom';

const LogoComponent = () => {
  return (
    <>
      <Link to="/">
        <h1 className="text-3xl p-2 pb-0 font-extrabold text-indigo-700 duration-75 ease-linear bg-slate-100">
          Fooden
        </h1>
        <div className="border-b border-indigo-800 "></div>
      </Link>
    </>
  );
};

export default LogoComponent;
