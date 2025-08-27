import React from 'react';
import { Link } from 'react-router-dom';
export default function Product({thumbnail,category,title,price,id}){
    return(
    <div className='w-80 h-120 m-5'>
      <img className='w-80 h-80 p-5 bg-gray-200 ' src={thumbnail}/>
      <p className='text-gray-400 font-medium text-left pt-2.5'>{category}</p>
      <h3 className='font-bold text-left pt-2.5'>{title}</h3>
      <img className='w-20 h-10 pt-2.5' src="https://www.kindpng.com/picc/m/710-7105732_transparent-five-star-png-png-download.png
" />
     <p className='font-bold text-left pt-2.5'>${price}</p>
     <Link className="block text-red-900 text-left pt-2.5" to={"/product/" + id}>View Detail </Link>
    </div>
      
    )
}
