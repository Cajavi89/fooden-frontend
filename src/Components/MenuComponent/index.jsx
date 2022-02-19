import React from 'react';
import { Link } from 'react-router-dom';

const MenuComponent = () => {
  return (
    <ul className="w-64 flex border border-green-400 rounded-lg p-2 gap-5 justify-center ">
      <li className="cursor-pointer">
        <Link to="/">Inicio</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/">Buscar</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/">Perfil</Link>
      </li>
      <li className="cursor-pointer">
        <Link to="/registrarse">Registrarse</Link>
      </li>
    </ul>
  );
};

export default MenuComponent;
