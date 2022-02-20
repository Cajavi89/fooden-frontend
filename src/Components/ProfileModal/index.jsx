/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const ProfileModal = ({ viewState, changeViewState, infoProfile }) => {
  const closeSessionHandler = () => {
    localStorage.removeItem('token');
    changeViewState(false);
  };
  return (
    <>
      {viewState && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-opacity-50 bg-black flex items-center justify-center p-10 cursor-none ">
          <div className="w-96 height-min-100px bg-slate-100 relative rounded-md box-shadow-profile p-5">
            {/* header modal */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-indigo-400 ">
              <h3 className="font-semibold text-base ">Perfil</h3>
              <button
                className="w-7 h-7 transition-all hover:bg-slate-200"
                onClick={() => changeViewState(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-x w-full h-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div>
              <div className="parent flex p-3">
                <div className="div1 flex flex-col">
                  <span className="text-indigo-600">
                    {infoProfile.fullName}
                  </span>
                  <span>{infoProfile.email}</span>
                  <span className="h-full flex place-items-end">
                    Cambiar contraseña
                  </span>
                  <button
                    className="text-red-600 flex items-start"
                    onClick={closeSessionHandler}
                  >
                    Cerrar Sesion
                  </button>
                </div>
                <div className="div2 ml-10 flex flex-col items-center justify-center">
                  {' '}
                  <img
                    className="rounded-full shadow-xl border-2 border-indigo-300 w-28"
                    src="https://www.exaltedchristchurch.com/wp-content/uploads/2017/02/blank-profile-picture-png-transparent.png"
                    alt={`foto-perfil-${infoProfile.fullName}`}
                  />
                  <span>Cambiar Foto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
