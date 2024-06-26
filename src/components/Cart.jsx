import React, { useEffect , useState} from "react";
import { useEcom } from "../context/ecomContext";
import Card from "./Card";

function Cart() {
  const { allCard } = useEcom();
  const [totalCart , setTotalCart] = useState(0);
  useEffect(() => {
    setTotalCart(allCard.reduce((acc , curr) => curr.price + acc , 0));
  },[allCard])
  return (
    <div className="relative">
    <div className={`py-4 pb-10 ${allCard && allCard.length ? "grid gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 gap-x-4 " : ""}`}>
      {allCard && allCard.length>0 ? 
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
    <div className='w-full fixed bottom-0 left-0 py-2 text-center bg-[#1f1f1f] text-white'>
      <span>${totalCart}</span>
    </div>
    </div>
  );
}

export default Cart;
