import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import useFetchedData from './hook/useFetchedData.js'
import Item from './components/Item.jsx'
import FilterItem from './components/FilterItem.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>,
        // loader : async () => {
        //   const fetchProduct = await fetch("https://dummyjson.com/products");
        //   const result = await fetchProduct.json();
        //   return result["products"] || []
        // }
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/item/:product",
        element : <Item/>
      },
      {
        path : "/filter/:category",
        element : <FilterItem/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
