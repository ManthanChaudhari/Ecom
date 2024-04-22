import React, { useEffect , useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useFetchedData from "../hook/useFetchedData"
import { useEcom } from '../context/ecomContext';

function Header() {
  const {data,loading} = useFetchedData('https://dummyjson.com/products/categories');
  const [filter , setFilter] = useState(false);
  const navigate = useNavigate();
  const handleFilter = (e) => {
    navigate(`filter/${e.target.innerText}`)
    setFilter(false);
  }
  return (
    <div className='px-4 py-3 shadow-lg bg-[#1f1f1f] relative'>
      <nav className='flex justify-between'>
        <h1 className='text-xl text-white font-satisfy'><Link to="/">Ecom</Link></h1>
        <ul className='flex gap-x-5 select-none'>
            <li><NavLink to="/" className={({isActive}) => `${isActive ? "text-[#e9e9e9]" : "text-white"}`}>Home</NavLink></li>
            <li><NavLink to="/cart" className={({isActive}) => `${isActive ? "text-[#e9e9e9]" : "text-white"}`}>Cart</NavLink></li>
            <li className='text-white cursor-pointer' onClick={() => setFilter(prev => !prev)}>Filter</li>
        </ul>
       
      </nav>
      <div>
        <ul className={`shadow-lg bg-white absolute right-2 z-10 px-5 py-2 top-[90%] rounded-sm ${filter ? "inline-block" : "hidden"} select-none`}>
         {data && data.length ? data.map((category,index) => (
           <li key={index} className='cursor-pointer active:text-[#4a4a4a] my-1' onClick={handleFilter}>{category}</li>
          )) : "No categories available"}
        </ul>
        </div>
    </div>
  )
}

export default Header
