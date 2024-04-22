import React, { useEffect, useState } from 'react'
import Card from './Card'
import useFetchedData from '../hook/useFetchedData';
import Lottie from "lottie-react";
import loadanimation from "../assets/Animation - 1713808954341.json"


function Home() {
    const {data,loading} = useFetchedData("https://dummyjson.com/products");
  return !loading ? (
    <div className='grid  py-4 gap-y-10  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-4'>
     {data && data.length &&  data.map((item) => (
        <Card key={item.id} card = {item} productImage={item.thumbnail} productTitle={item.title} price={item.price} description={item.description}/>
     ))}
    </div>
  ) : <div className='w-full h-screen flex justify-center items-center'>
        <Lottie animationData={loadanimation} className=" w-80 lg:w-96" />
  </div>
}

export default Home
