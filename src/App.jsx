import { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { EcomContextProvider, useEcom } from "./context/ecomContext";

function App() {
  const [allCard, setAllCard] = useState("");
  const addCard = (card) => {
    setAllCard((prev) => [...prev, card]);
  };
  const removeCard = (card) => {
    setAllCard((prev) => prev.filter((item) => card.id !== item.id));
  };
  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem("cartItem"));
  if (cards) {
    setAllCard(cards);
  }
  },[])
  useEffect(() => { 
    localStorage.setItem("cartItem" , JSON.stringify(allCard));
  },[allCard])
  return (
    <EcomContextProvider value={{ allCard, addCard, removeCard}}>
      <Header />
      <div className="px-4">
          <Outlet />
      </div>
    </EcomContextProvider>
  );
}

export default App;
