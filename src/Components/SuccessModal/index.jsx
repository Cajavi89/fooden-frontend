import React from 'react';

const SuccessModal = () => {
  return (
    <>
      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 fixed top-5 z-50">
        <svg
          className="h-6 w-6 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900">
        Logueado correctamente!
      </h3>
    </>
  );
};

export default SuccessModal;
