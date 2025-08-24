import React from "react";
import { useParams } from "react-router-dom";
import data from "./Dummydata";
export default function Detailpage() {
    const { sku } = useParams()
let product;
for (let i = 0; i < data.length;i++){
    const p = data[i]
    if (Number(sku)===p.sku) {
        product = p;
        break;
    }
   
}
 

    return (
        <div>
        <div className="p-6 bg-white w-280 h-120 m-5 flex ">
            <img className="w-100 h-100 p-5 m-4 bg-gray-200" src={product.imgUrl}></img>
            <div className="m-6 ">
                <h1 className="pt-2.5 text-left text-gray-600 text-5xl ">{product.title}</h1>
                 <h3 className='font-bold text-left pt-6 text-3xl text-gray-600 '>${product.price }</h3>
                 <p className=' text-left pr-10 text-xl leading-9 pt-6'>Lorem  Ipsum  is  simply  dummy  text  of the printing and typesetting industry , when an unknown printer  of type  scrambled it to make a type specimen book. </p>
                <div className="text-left mt-4">
                <input className="border border-gray-300 border-2 w-12 p-3 h-8 pl-2" Value={1} type="text"></input>
                <button className="text-left p-3 px-8 m-5 rounded text-xl font-bold text-white bg-red-600">Add to Cart</button>
                </div>
            </div>
            
            </div>
            </div>
    )
}