import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CardRestaurant = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const pedido = async () => {
      const llamado = await fetch('http://localhost:3001');

      setData(...data, llamado);
    };
    pedido();
    console.log('fuera', data);
  }, [data]);

  return (
    <div className="w-full h-80 bg-indigo-200">
      {/* {data.map((res) => console.log(res))} */}
    </div>
  );
};

CardRestaurant.propTypes = {
  props: PropTypes.object
};

export default CardRestaurant;
