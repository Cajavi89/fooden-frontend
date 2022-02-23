/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ReviewsComponent = ({ comments, nameRestaurant }) => {
  const userLogged = localStorage.getItem('tokenFooden');
  const [userRating, setUserRating] = useState(0);
  return (
    <>
      {userLogged && (
        <div className="mt-5 bg-indigo-100 p-2 w-full">
          <h3>¿Como calificarias tu experiencia?</h3>
          <Rating
            onClick={(rate) => setUserRating(rate)}
            ratingValue={userRating}
            readonly={userRating > 0}
            size={28}
            showTooltip
            tooltipDefaultText={'Califica'}
            tooltipArray={[
              'Muy Mala',
              'Mala',
              'Buena',
              'Muy Buena',
              'Perfecta'
            ]}
          />
        </div>
      )}
      {userLogged ? (
        <div className="flex justify-center mt-5">
          <div className="mb-3 w-full">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              <h3 className="text-lg text-indigo-800 mb-3 bg-opacity-50 bg-slate-50">{`Comparte tu opnion de ${nameRestaurant}`}</h3>
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-2
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Como fue tu experiencia..."
            ></textarea>
            <button
              className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      ) : (
        <div className="text-base text-red-700 italic mt-4 underline">
          Para compartir tu opinion o comentario debes ingresar o registrarte
        </div>
      )}
      {/* read comments */}
      <h3 className="text-lg text-indigo-800 mb-3 bg-opacity-50 bg-slate-50 mt-5">
        Comentarios de otros visitantes
      </h3>
      <div
        className="h-auto w-48 flex-none bg-cover rounded text-center overflow-hidden"
        title="Mountain"
      ></div>
      <div className="border border-gray-400  bg-indigo-100 rounded-b rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <p className="text-indigo-700 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, Nonea! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-xs">
            <p className="text-gray-900 leading-none">John Smith</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsComponent;
