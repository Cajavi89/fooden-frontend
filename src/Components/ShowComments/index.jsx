/* eslint-disable react/prop-types */
import React from 'react';

function ShowComments({ review }) {
  const { comment, user } = review;
  return (
    <>
      <div
        className="h-auto w-48 flex-none bg-cover rounded text-center overflow-hidden mb-1"
        title="Mountain"
      ></div>
      <div className="border border-gray-400  bg-indigo-100 rounded-b rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-2">
          <p className="text-indigo-700 text-sm capitalize">{comment}</p>
        </div>
        <div className="flex items-center">
          <div className="text-xs">
            <p className="text-gray-900 leading-none capitalize">
              {user?.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowComments;
