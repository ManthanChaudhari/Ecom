import React from 'react'
import { useParams } from 'react-router-dom';
import useFetchedData from '../hook/useFetchedData';
import Card from './Card';
import Lottie from "lottie-react";
import loadanimation from "../assets/Animation - 1713808954341.json"


function FilterItem() {
    const {category} = useParams();
    // console.log(category);
    const {data,error,loading} = useFetchedData(`https://dummyjson.com/products/category/${category}`);
  return !loading ? (
    <div className='grid  py-4 gap-y-10  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-4'>
    {error && <h1 className='text-red-500'>{error}</h1>}
    {data && data.length &&  data.map((item) => (
       <Card key={item.id} card = {item} productImage={item.thumbnail} productTitle={item.title} price={item.price} description={item.description}/>
    ))}
   </div>
  ) : <div className='w-full h-full flex justify-center items-center'>
  <Lottie animationData={loadanimation} className=" w-10 h-40" />
</div>
}

export default FilterItem
