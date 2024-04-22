import React, { useEffect, useState } from 'react'
import Card from './Card'
import useFetchedData from '../hook/useFetchedData';

function Home() {
    const {data,loading} = useFetchedData("https://dummyjson.com/products");
  return !loading ? (
    <div className='grid  py-4 gap-y-10  md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-4'>
     {data && data.length &&  data.map((item) => (
        <Card key={item.id} card = {item} productImage={item.thumbnail} productTitle={item.title} price={item.price} description={item.description}/>
     ))}
    </div>
  ) : <h1>Loading...</h1>
}

export default Home
