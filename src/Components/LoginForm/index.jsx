import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import LogoComponent from '../LogoComponent';
import { loginAccount } from '../../services/auth';
import SuccessModal from '../SuccessModal';

const LoginForm = () => {
  const [hasError, setHasError] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      <LogoComponent />
      <section className="mx-auto my-auto bg-indigo-300 p-4 flex flex-col  justify-center items-center h-screen">
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
              resetForm();
              const response = await loginAccount(email, password);
              const data = await response.json();
              if (response.ok) {
                setTimeout(() => {
                  navigate('/');
                }, 1500);
                localStorage.setItem('token', data);
                <SuccessModal />;
              } else {
                setHasError(data.message);
              }
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
                  <div className="text-red-500 text-xs italic">{hasError}</div>
                )}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Entrar
                  </button>
                  <Link
                    className="inline-block align-baseline font-bold text-xs text-blue-500 hover:text-blue-800"
                    to="/"
                  >
                    Olvidaste la contraseña?
                  </Link>
                </div>
              </Form>
              <p className="text-center text-gray-500 text-xs">
                &copy;2022 Fooden. All rights reserved.
              </p>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
};

export default LoginForm;
