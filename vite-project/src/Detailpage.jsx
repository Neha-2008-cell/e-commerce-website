import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getdetail } from "./api";
import { FaChevronRight , FaChevronLeft} from "react-icons/fa6";
import Loading from "./Loading";
import Notmatch from "./Notmatch";
export default function Detailpage({handleCart}) {
    let [product, setproduct] = useState()
    let [loading, setloading] = useState(true)
    let [count,setcount] = useState(1)
    const id  = +useParams().id 
    useEffect(
        function () {
            const abc = getdetail(id)
            abc.then( function (data) {
                setproduct(data)
                setloading(false)
            }).catch(function () {
                    setloading(false)
                })
        },[id]
    )
    if (loading) {3
        return (
            <Loading/>
        )
    }
 if (!product) {
        return (
            <Notmatch/>
        )
    }

    function handlecount(event) {
       setcount(+event.target.value)
   }

    function pressbutton() {
        setcount(1)
        handleCart(id, count)
    }
    
    return (
        <div>
             
            <div className="p-6 bg-white w-280 h-140 m-5 flex ">
                <Link to="/"> <IoMdArrowRoundBack className="text-4xl " /> </Link> 
                {id > 1 && <Link to={"/product/" + (id - 1)}> <FaChevronLeft className="text-3xl mt-50 mr-5" /> </Link>}
            <img className="w-100 h-100 p-5 m-4 bg-gray-200" src={product.thumbnail}></img>
            <div className="m-6 ">
                <h1 className="pt-2.5 text-left text-gray-600 text-5xl ">{product.title}</h1>
                 <h3 className='font-bold text-left pt-6 text-3xl text-gray-600 '>${product.price }</h3>
                 <p className=' text-left pr-10 text-xl leading-9 pt-6'>{product.description} </p>
                <div className="text-left mt-4">
                <input className="border border-gray-300 border-2 w-18 p-3 h-8 pl-2" onChange={handlecount} value={count} type="number"></input>
                <button className="text-left p-3 px-8 mb-10 m-5 rounded text-xl font-bold text-white bg-red-600 active:bg-red-400" onClick={pressbutton}>Add to Cart</button>
                </div>
            </div>
             <Link to={"/product/" + (id + 1)}> <FaChevronRight  className="text-3xl mt-50"/> </Link> 
            </div>
           
            
           
            </div>
    )
}
