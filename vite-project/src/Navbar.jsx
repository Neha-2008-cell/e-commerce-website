import React from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
export default function Navbar({totalcount}) {
    return (
      <div className='bg-white w-full flex justify-between items-center'>
          
        <img className="w-50 p-5 ml-5" src="https://i.postimg.cc/q7QW9SxK/Screenshot-from-2025-08-24-15-23-20.png"></img>
        <div className='flex flex-col  items-center'>
          <RiShoppingBagLine className='text-5xl m-10 text-orange-500 ' />
          <span className='-mt-17 mb-10'>{ totalcount}</span>
       </div>
        
        </div>
    )
}