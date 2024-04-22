import { createContext, useContext } from "react";

const ecomContext = createContext({});

const EcomContextProvider = ecomContext.Provider;

function useEcom(){
    return useContext(ecomContext);
}

export {useEcom , EcomContextProvider};