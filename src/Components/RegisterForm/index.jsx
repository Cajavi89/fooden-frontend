/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LogoComponent from '../LogoComponent';
import registerAccount from '../../services/register';
import Loader from '../Loader';

const RegisterForm = () => {
  const [sendedEmail, setSendedEmail] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <LogoComponent />
      <section className="mx-auto my-auto bg-indigo-300 p-4 flex flex-col  justify-center items-center h-screen">
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            conditions: false
          }}
          validate={(values) => {
            const errores = {};

            if (!values.firstName) {
              errores.firstName = 'Porfavor ingresa un nombre.';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.firstName)) {
              errores.firstName = 'Nombre solo con letras';
            }
            if (!values.lastName) {
              errores.lastName = 'Porfavor ingresa un apellido.';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastName)) {
              errores.firstName = 'Apellido solo con letras';
            }
            if (!values.email) {
              errores.email = 'Porfavor ingresa email.';
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errores.email = 'Porfavor ingresa un email valido';
            }
            if (values.password.length < 6) {
              errores.password = 'Contrasena minimo de 6 caracteres.';
            }
            if (!values.conditions) {
              errores.conditions =
                'Porfavor acepta los terminos y condiciones.';
            }
            return errores;
          }}
          onSubmit={(
            { firstName, lastName, email, password },
            { resetForm }
          ) => {
            registerAccount({ firstName, lastName, email, password });
            resetForm();
            setSendedEmail(true);
            setTimeout(() => {
              setSendedEmail(false);
              navigate('/');
            }, 1300);
          }}
        >
          {({ errors }) => (
            <Form className="w-full max-w-sm">
              <div className="block text-indigo-900 font-bold md:text-right mb-3 md:mb-0 pr-4">
                Formulario de registro
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="firstName"
                  >
                    Nombre
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Pedro"
                  />
                </div>
                <ErrorMessage
                  name="firstName"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.firstName}
                    </div>
                  )}
                />
              </div>
              {/* lastName */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="lastName"
                  >
                    Apellido
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Martinez"
                  />
                </div>
                <ErrorMessage
                  name="lastName"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.lastName}
                    </div>
                  )}
                />
              </div>
              {/* Email */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="pmartinez@correos.com"
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
              </div>
              {/* Contrasena */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="password"
                  >
                    Contraseña
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.password}
                    </div>
                  )}
                />
              </div>
              {/* terminos y condiciones */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3"></div>
                <label
                  className="md:w-2/3 block text-gray-500 font-bold"
                  htmlFor="conditions"
                >
                  <Field
                    className="mr-2 leading-tight"
                    type="checkbox"
                    name="conditions"
                    id="conditions"
                  />
                  <span className="text-sm">
                    Acepto los terminos y condiciones
                  </span>
                  <ErrorMessage
                    name="conditions"
                    component={() => (
                      <div className="text-red-500 text-xs italic">
                        {errors.conditions}
                      </div>
                    )}
                  />
                </label>
              </div>
              {/* Boton enviar */}
              <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                  <button
                    className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </div>
              {sendedEmail && (
                <div className="text-xs text-green-700">{<Loader />}</div>
              )}
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default RegisterForm;
