import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getdetail } from "./api";
export default function Detailpage() {
    let [product , setproduct] = useState()
    const { id } = useParams()
  console.log("ye h id",id)
    useEffect(
        function () {
            const abc = getdetail(id)
             console.log("ye h id",id)
            abc.then( function (response) {
                    setproduct(response.data)
                } )
        },[]
    )

    if (!product) {
        return (
            <h1>Loading...</h1>
        )
    }
// let product;
// for (let i = 0; i < data.length;i++){
//     const p = data[i]
//     if (Number(sku)===p.id) {
//         product = p;
//         break;
//     }
   
// }
 

    return (
        <div>
            
            <div className="p-6 bg-white w-280 h-140 m-5 flex ">
               <Link to="/"> <IoMdArrowRoundBack className="text-3xl "/> </Link> 
            <img className="w-100 h-100 p-5 m-4 bg-gray-200" src={product.thumbnail}></img>
            <div className="m-6 ">
                <h1 className="pt-2.5 text-left text-gray-600 text-5xl ">{product.title}</h1>
                 <h3 className='font-bold text-left pt-6 text-3xl text-gray-600 '>${product.price }</h3>
                 <p className=' text-left pr-10 text-xl leading-9 pt-6'>{product.description} </p>
                <div className="text-left mt-4">
                <input className="border border-gray-300 border-2 w-12 p-3 h-8 pl-2" defaultValue={1} type="text"></input>
                <button className="text-left p-3 px-8 mb-10 m-5 rounded text-xl font-bold text-white bg-red-600">Add to Cart</button>
                </div>
            </div>
            
            </div>
            </div>
    )
}