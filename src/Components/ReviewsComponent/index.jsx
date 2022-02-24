/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Rating } from 'react-simple-star-rating';
import {
  updateReviewHandler,
  getRestaurantByIdHandler,
  updateRatingHandler
} from '../../context/actions';
import { useAppDispatch, useAppState } from '../../context/store';
import ShowComments from '../ShowComments';
import LoginFormModal from '../LoginFormModal';

const ReviewsComponent = ({ props }) => {
  const { _id } = props;
  const state = useAppState();
  const fullName = state?.user?.fullName;
  const { currentRestaurant } = state;
  const { reviews, nameRestaurant } = currentRestaurant;
  const dispatch = useAppDispatch();
  const [userRating, setUserRating] = useState(0);
  const [rerender, setRerender] = useState(false);
  const [viewLoginModal, setviewLoginModal] = useState(false);
  const logged = localStorage.getItem('tokenFooden');

  useEffect(() => {
    getRestaurantByIdHandler(dispatch, _id);
  }, [rerender]);

  const handleRating = (rate) => {
    setUserRating(rate);
    setRerender(!rerender);
    updateRatingHandler(dispatch, _id, rate);
  };

  return (
    <>
      <LoginFormModal
        viewState={viewLoginModal}
        changeViewState={setviewLoginModal}
      />
      {logged && (
        <div className="mt-5 bg-indigo-100 p-2 w-full">
          <h3>¿Como calificarias tu experiencia?</h3>
          <Rating
            onClick={handleRating}
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
      {logged ? (
        <Formik
          initialValues={{
            comment: ''
          }}
          onSubmit={({ comment }, { resetForm }) => {
            updateReviewHandler(dispatch, _id, comment, fullName);
            setRerender(!rerender);
            resetForm();
          }}
        >
          {() => (
            <Form>
              <div className="mb-3 w-full">
                <label
                  htmlFor="comment"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  <h3 className="text-lg text-indigo-800 mb-3 bg-opacity-50 bg-slate-50">{`Comparte tu opnion de ${nameRestaurant}`}</h3>
                </label>
                <Field
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
                  id="comment"
                  rows="3"
                  name="comment"
                  as="textarea"
                  placeholder="Como fue tu experiencia..."
                  // onChange={onChangeHandler}
                />
                <button
                  className="shadow bg-indigo-500 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-3 rounded"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="text-base text-red-700 italic mt-4">
          Para compartir tu opinion o comentario debes{' '}
          <button
            className="underline"
            onClick={() => setviewLoginModal(!viewLoginModal)}
          >
            Ingresar
          </button>{' '}
          o{' '}
          <Link className="underline" to="/registrarse">
            registrarte
          </Link>
        </div>
      )}
      {/* read comments */}
      <h3 className="text-lg text-indigo-800 mb-3 bg-opacity-50 bg-slate-50 mt-5">
        {`Comentarios de otros visitantes (${reviews?.length})`}
      </h3>
      {reviews?.reverse().map((review) => (
        <ShowComments key={review._id} review={review} />
      ))}
    </>
  );
};

export default ReviewsComponent;
