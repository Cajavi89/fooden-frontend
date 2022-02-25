/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-debugger */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppState, useAppDispatch } from '../../context/store';
import Loader from '../Loader';
import { Rating } from 'react-simple-star-rating';
import ReviewsComponent from '../ReviewsComponent';
import './styles.scss';
import { getRestaurantByIdHandler } from '../../context/actions';

const RestaurantDetails = () => {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { restaurantId } = useParams();
  const { currentRestaurant } = state;

  useEffect(async()=>{
    getRestaurantByIdHandler(dispatch,restaurantId)
    },[restaurantId])

  const {
    nameRestaurant,
    phone,
    photo,
    foodType,
    neighborhood,
    address,
    rating,
    ratingTimes,
    _id,
    reviews
  } = currentRestaurant;
  const promRatings = rating / ratingTimes;

  return (
    <div className="w-full p-2">
      <div className="flex w-full">
        {/* CONTENEDOR PRINCIPAL */}
        <div className="w-full flex">
          <div className="c-card block w-full bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
            {!currentRestaurant && <Loader />}
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 width-image object-cover "
                src={photo}
                alt={nameRestaurant}
              />
            </div>
            <div className="p-4">
              <h2 className="mt-2 font-bold">{nameRestaurant}</h2>
              <div className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                </span>
                <span className="text-xs italic">{`${address}`}</span>
              </div>
              {/* <p className="text-sm">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p> */}
              <div className="mt-3 flex items-center">
                &nbsp;
                <span className="text-xs ml-1">{`Tipo de comida: `}</span>
                <span className="text-sm capitalize text-indigo-700 ml-2">
                  {foodType}
                </span>
              </div>
            </div>
            <div className="p-4 border-t border-b text-xs text-gray-700">
              <span className="flex items-center mb-1">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pin-map"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                </span>{' '}
                {`Barrio: ${neighborhood}`}
              </span>
              <span className="flex items-center">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </span>{' '}
                {`Contacto: ${phone}`}
              </span>
            </div>
            <div className="p-4 flex items-center text-sm text-gray-600">
              <Rating ratingValue={promRatings} readonly />
              <span className="ml-2">{ratingTimes ? `Promedio de ${ratingTimes} calificaciones` : 'Aun no tenemos calificaciones de este lugar.'}</span>
            </div>
          </div>
        </div>
      </div>
      <ReviewsComponent props={({ _id, reviews, nameRestaurant})} />
    </div>
  );
};

export default RestaurantDetails;
