import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from "react-icons/ri";
import {totalCountContext} from "./App.jsx"
export default function Navbar() {
  
  const { totalcount } = useContext(totalCountContext)

    return (
      <div className='bg-white w-full flex justify-between items-center'>
          
        <img className="w-50 p-5 ml-5" src="https://i.postimg.cc/q7QW9SxK/Screenshot-from-2025-08-24-15-23-20.png"></img>
        <div className='flex flex-col  items-center'>
          <RiShoppingBagLine className='text-5xl m-10 text-orange-500 ' />
          <Link to={"/Cartpage"} className='-mt-17 mb-3'>{totalcount}</Link>
          <Link to={"/Login"} className='text-white bg-blue-800 rounded-full p-2 m-2'>Login</Link>
       </div>
        
        </div>
    )
}