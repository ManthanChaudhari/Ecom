import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchedData from '../hook/useFetchedData';
import CartButton from './CartButton';

function Item() {
    const {product} = useParams();
    const {data,loading,error} = useFetchedData(`https://dummyjson.com/products/search?q=${product}`)
    const [image , setImages] = useState("");
  return !loading ?  (
    <div className='flex flex-row items-center'>
      {error && <h1>{error}</h1>}
      {data && data.length ?  data.map((item) => (
    <div key={item.id} className='w-full py-3 px-2 flex flex-col  items-center gap-y-3'>
        <img src={image || item.thumbnail} className='shadow-lg w-[350px] h-[250px] md:w-[500px] lg:w-[600px] lg:h-72 object-contain rounded-md transition-all'   alt={product}/>
        <h1 className='text-md text-center lg:text-lg md:text-lg px-2 py-2 bg-[#1f1f1f] text-white'>{item.title}</h1>
        <div className='flex overflow-x-scroll gap-x-3 scroll-smooth no-scrollbar'>
        {item.images && item.images.length > 1 &&  item.images.map((itemImage , index) => (
            <img key={index} className=' w-28 h-28 object-cover shadow-lg cursor-pointer' src ={itemImage} onClick={() => setImages(itemImage)}/>
        ))}
        </div>
        <h1 className='text-md text-center lg:text-lg md:text-lg'>{item.description}</h1>
        <h1 className='text-md text-center lg:text-lg md:text-lg px-2 py-2 bg-red-600 text-white'>${item.price}</h1>
        <CartButton card={data[0]}/>
      </div>
      )) : <h1 className='text-center bg-red-500 text-white px-2 py-2'>Sorry we don't have much data of {product} though you can buy it from the store!</h1>}

    </div>
  ) : <h1>Loading...</h1>
}

export default Item
