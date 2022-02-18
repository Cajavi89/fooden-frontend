import React from 'react';

const MenuComponent = () => {
  return (
    <ul className="w-64 flex border border-green-400 rounded-lg p-2 gap-5 justify-center ">
      <li className="cursor-pointer">
        <a href="/">Inicio</a>
      </li>
      <li className="cursor-pointer">
        <a href="/">Buscar</a>
      </li>
      <li className="cursor-pointer">
        <a href="/">Perfil</a>
      </li>
      <li className="cursor-pointer">
        <a href="/">Registrarse</a>
      </li>
    </ul>
  );
};

export default MenuComponent;
