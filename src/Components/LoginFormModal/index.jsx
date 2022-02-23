/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../context/store';
import { loginUser } from '../../context/actions';

const LoginFormModal = ({ viewState, changeViewState }) => {
  const dispatch = useAppDispatch();
  const [hasError, setHasError] = useState(null);
  return (
    <>
      {viewState && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-opacity-50 bg-black flex items-center justify-center p-10 cursor-none z-50 ">
          <div className="w-96 height-min-350px bg-slate-100 relative rounded-md box-shadow-profile p-5">
            {/* header modal */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-indigo-400 ">
              <h3 className="font-semibold text-base ">
                Formulario de Ingreso
              </h3>
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
              <Formik
                initialValues={{
                  email: '',
                  password: ''
                }}
                validate={(values) => {
                  const errores = {};

                  if (!values.email) {
                    errores.email = 'Porfavor ingresa email.';
                  } else if (
                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                      values.email
                    )
                  ) {
                    errores.email = 'Porfavor ingresa un email valido';
                  }
                  return errores;
                }}
                onSubmit={async ({ email, password }, { resetForm }) => {
                  try {
                    loginUser(dispatch, email, password);
                    resetForm();
                    changeViewState(false);
                  } catch (error) {
                    setHasError(error);
                  }
                }}
              >
                {({ errors }) => (
                  <div className="w-full max-w-xs">
                    <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <Field
                          className="shadow appearance-none border focus:border-indigo-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="email"
                          id="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component={() => (
                          <div className="text-red-500 text-xs italic">
                            {errors.email}
                          </div>
                        )}
                      />
                      <div className="mb-6">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                        >
                          Contraseña
                        </label>
                        <Field
                          className="shadow appearance-none border focus:border-indigo-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="password"
                          id="password"
                          type="password"
                          placeholder="******************"
                        />
                      </div>
                      {hasError && (
                        <div className="text-red-500 text-xs italic">
                          {hasError}
                        </div>
                      )}
                      <div className="flex items-center justify-around">
                        <button
                          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Entrar
                        </button>
                        <div className="flex flex-col gap-2">
                          <Link
                            className="inline-block align-baseline font-bold text-xs text-indigo-500 hover:text-indigo-800"
                            to="/"
                          >
                            Olvidaste la contraseña?
                          </Link>
                          <Link
                            className="inline-block align-baseline font-bold text-xs text-indigo-500 hover:text-indigo-800"
                            to="/registrarse"
                          >
                            Crear cuenta nueva
                          </Link>
                        </div>
                      </div>
                    </Form>
                    <p className="text-center text-gray-500 text-xs">
                      &copy;2022 Fooden. All rights reserved.
                    </p>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginFormModal;
