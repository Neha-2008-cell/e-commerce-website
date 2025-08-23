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
 console.log("paa gyo mithiya" ,product)

    return(
        <h1>Ram ka naam le lo !! varna chulu bhar pani me doob maro !!</h1>
    )
}