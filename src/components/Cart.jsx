import React from "react";
import { useEcom } from "../context/ecomContext";
import Card from "./Card";

function Cart() {
  const { allCard } = useEcom();
  return (
    <div className={`py-4 ${allCard && allCard.length ? "grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-4 " : ""}`}>
      {allCard && allCard.length ? 
        allCard.map((item) => (
          <Card
            key={item.id}
            card={item}
            productImage={item.thumbnail}
            productTitle={item.title}
            price={item.price}
            description={item.description}
          />
        )) : <h1 className='text-center bg-red-500 text-white px-2 py-2'>Cart is empty!</h1>}
    </div>
  );
}

export default Cart;
