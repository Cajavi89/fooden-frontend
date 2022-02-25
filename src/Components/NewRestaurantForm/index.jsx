/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LogoComponent from '../LogoComponent';
import uploadImageHandler from '../../services/uploadImage';
import createRestaurant from '../../services/createRestaurant';
import Loader from '../Loader';

const NewRestaurantForm = () => {
  const [file, setFile] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const [loader, setLoader] = useState(false);
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <LogoComponent />
      <section className="mx-auto my-auto bg-indigo-300 p-4 flex flex-col  justify-center items-center h-screen">
        <Formik
          initialValues={{
            nameRestaurant: '',
            address: '',
            neighborhood: '',
            phone: '+57',
            rating: false,
            foodType: '',
            reviews: '',
            photo: ''
          }}
          validate={(values) => {
            const errores = {};

            if (!values.nameRestaurant) {
              errores.nameRestaurant = 'Porfavor ingresa un nombre.';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nameRestaurant)) {
              errores.nameRestaurant = 'Nombre solo con letras';
            }
            if (!values.address) {
              errores.address = 'Porfavor llena este campo';
            }

            if (!values.neighborhood) {
              errores.address = 'Porfavor llena este campo';
            }

            if (values.phone.length < 10) {
              errores.phone = 'telefono minimo de 10 caracteres.';
            }
            if (!values.conditions) {
              errores.conditions =
                'Porfavor acepta los terminos y condiciones.';
            }
            return errores;
          }}
          onSubmit={async (
            { nameRestaurant, address, neighborhood, phone, foodType },
            { resetForm }
          ) => {
            setLoader(true);
            try {
              const myToken = localStorage.getItem('tokenFooden');
              const photoRestaurant = await uploadImageHandler(file, myToken);
              await createRestaurant(
                {
                  nameRestaurant,
                  address,
                  neighborhood,
                  phone,
                  foodType
                },
                photoRestaurant,
                myToken
              );
              resetForm();
              setRegisterSuccess(true);
              setTimeout(() => {
                setRegisterSuccess(false);
              }, 4000);
            } catch (error) {
              console.log(error.message);
            } finally {
              setLoader(false);
            }
          }}
        >
          {({ errors }) => (
            <Form className="w-full max-w-sm">
              <div className="block text-indigo-900 font-bold md:text-right mb-3 md:mb-0 pr-4">
                Crear Restaurante
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="nameRestaurant"
                  >
                    Nombre del Restaurante
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="nameRestaurant"
                    name="nameRestaurant"
                    type="text"
                    placeholder="Pedro"
                  />
                </div>
                <ErrorMessage
                  name="nameRestaurant"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.nameRestaurant}
                    </div>
                  )}
                />
              </div>
              {/* address */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="address"
                  >
                    Direccion
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Calle 1 no 1 10"
                  />
                </div>
                {/* <ErrorMessage
                  name="address"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.address}
                    </div>
                  )}
                /> */}
              </div>
              {/* neighborhood */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="neighborhood"
                  >
                    Barrio
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="neighborhood"
                    name="neighborhood"
                    type="neighborhood"
                    placeholder="Laureles"
                  />
                </div>
                <ErrorMessage
                  name="neighborhood"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.neighborhood}
                    </div>
                  )}
                />
              </div>
              {/* telefono */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="phone"
                  >
                    Telefono
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="phone"
                    name="phone"
                    type="phone"
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.phone}
                    </div>
                  )}
                />
              </div>
              {/* foodtype */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="foodtype"
                  >
                    Tipo de comida
                  </label>
                </div>
                <div className="md:w-2/3">
                  <Field
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 formp-select"
                    id="foodtype"
                    name="foodType"
                    as="select"
                  >
                    <option Value="tipica">Tipica Colombiana</option>
                    <option value="rapida">Comida Rapida</option>
                    <option value="italiana">Italiana</option>
                    <option value="japonesa">Japonesa</option>
                    <option value="indu">Indu</option>
                    <option value="griega">Griega</option>
                    <option value="peruana">Peruana</option>
                    <option value="argentina">Argentina</option>
                    <option value="otra">Otra</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="neighborhood"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.neighborhood}
                    </div>
                  )}
                />
              </div>
              {/* photo */}
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                  <label
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    htmlFor="neighborhood"
                  >
                    Sube una foto del lugar
                  </label>
                </div>
                <div className="md:w-2/3">
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                    id="file"
                    name="file"
                    type="file"
                    accept="image/*"
                    onChange={onChangeFile}
                  />
                </div>
                <ErrorMessage
                  name="neighborhood"
                  component={() => (
                    <div className="text-red-500 text-xs italic">
                      {errors.neighborhood}
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
              {loader && (
                <div className="text-xs text-green-700">{<Loader />}</div>
              )}
              {registerSuccess && (
                <div className="text-green-700 text-sm italic">
                  Registro de restaurante exitoso.
                </div>
              )}
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
};

export default NewRestaurantForm;
