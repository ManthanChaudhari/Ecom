import React, { useEffect } from 'react'
import { useEcom } from '../context/ecomContext'
import { useNavigate } from 'react-router-dom';
import CartButton from './CartButton';

function Card({card , productImage , productTitle , price , description}) {
  const navigate = useNavigate();
  const navigateItem = () => {
    navigate(`/item/${productTitle}`);
  }
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl" >
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56 lg:h-72">
    <img
      src={productImage}
      alt="card-image" className="object-cover w-full h-full cursor-pointer"
      onClick={navigateItem}
       />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {productTitle}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
       ${price}
      </p>
    </div>
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
      {description}
    </p>
  </div>
  <div className="p-6 pt-0">  
    <CartButton card={card}/>
  </div>
</div>
  )
}

export default Card
