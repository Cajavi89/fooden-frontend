/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable-next-line camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileModal from '../ProfileModal';
import LoginFormModal from '../LoginFormModal';
import { useAppDispatch, useAppState } from '../../context/store';
import { getUserFromLocalStorage } from '../../context/actions';

const MenuComponent = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [viewLoginModal, setviewLoginModal] = useState(false);
  const dispatch = useAppDispatch();
  const { user } = useAppState();
  useEffect(() => {
    getUserFromLocalStorage(dispatch);
  }, []);
  console.log(user);

  return (
    <>
      <ProfileModal
        viewState={viewProfile}
        changeViewState={setViewProfile}
        infoProfile={user}
      />
      <LoginFormModal
        viewState={viewLoginModal}
        changeViewState={setviewLoginModal}
      />
      <ul className="w-64 flex border border-green-400 rounded-lg p-2 gap-5 justify-center ">
        <li className="cursor-pointer">
          <Link to="/">Inicio</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/">Buscar</Link>
        </li>
        {user ? (
          <li className="cursor-pointer">
            <button onClick={() => setViewProfile(!viewProfile)}>
              Mi Perfil
            </button>
          </li>
        ) : (
          <li className="cursor-pointer">
            <button onClick={() => setviewLoginModal(!viewLoginModal)}>
              Ingresar
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default MenuComponent;
