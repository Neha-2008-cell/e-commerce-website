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
 

    return(
        <div className="w-60 h-80 m-5 ">
            <img className="w-60 h-60 " src={product.imgUrl}></img>
            <h1 className="pt-2.5 font-bold">{product.title}</h1>
            <input className="border border-grey-500 w-10 pl-2 rounded-full" value={1} type="text"></input>
            <button className="pt-2.5 pl-2 text-red-800">Add to Cart</button>
            
       </div>
    )
}