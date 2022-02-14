import React from 'react';

const WhereToday = () => {
  return (
    <form className="flex justify-center">
      <input
        className="p-2 mt-5 w-3/4 rounded-md placeholder-indigo-500
        text-indigo-600
        hover:bg-gray-100 focus:outline-none focus:no-underline focus:text-indigo-600"
        type="text"
        name="filtrar"
        placeholder="¿Qué quieres comer hoy?"
      />
    </form>
  );
};

export default WhereToday;
