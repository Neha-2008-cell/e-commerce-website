import  {useEffect , useState , useContext} from "react";
import { getdetail } from "./api";
import { ImCross } from "react-icons/im";
import Loading from "./Loading";
import { countdata } from "./App";

export default function Cartrow() {
    
    const {cart , updateCart} = useContext(countdata)
    
let [products,setproducts] = useState([])
    let [loading, setloading] = useState(true)
    let [localCart , setlocalCart] = useState(cart)
    const ProductIds = Object.keys(cart)
   
    useEffect(function () {
        setlocalCart(cart)
    },[cart])

    useEffect(function () { 
         setloading(true)
        const allpromises = ProductIds.map(function (id) {
          return  getdetail(id)
        })
        Promise.all(allpromises).then(function (productdata) {
        setproducts(productdata)
        setloading(false)
    })
       }, [cart])

    
    if (loading) {
        return (
            <Loading/>
        )
    }

    
    function handleRemove(id) {
        const newcart = {...cart} 
        delete newcart[id]
        updateCart(newcart)
        console.log("cart", cart , "newcart" , newcart)
    }

    function handleChange(event , Id) {
        const newValue = +event.target.value 
        setlocalCart({ ...localCart, [Id]: newValue })
    }
    
    function changeCart() {
      updateCart(localCart)  
    }


    
    
    
    return (
        <div className="bg-white ">
          {products.map(function (props) {
                return (
                    <div className=" flex items-center gap-20 mb-1 w-270 mx-15  p-5" key={props.id}>
                       <div className="flex gap-10 w-100  grow items-center ">
                        <button onClick={function () {
                             handleRemove(props.id)
                           }
                        }><ImCross /></button> 
                            <img className="w-20 bg-gray-200" src={props.thumbnail} />
                            <h1 className="text-red-500 font-bold ">{props.title}</h1>
                        </div>
                        <div className="flex justify-end mb-1 items-center font-bold gap-25">
                        <p ><div className=" w-20 text-left">${props.price}</div></p>
                        <input value={localCart[props.id]} type="number" onChange={function (event) { handleChange(event , props.id) }} className="border border-gray-300 rounded-md m-5  border-2 w-12 p-1 h-8 pl-2 " />
                        <p  className="w-20 text-left">${localCart[props.id] * props.price }</p>
                       </div>
                    </div>
                        
                )
                
          })}
             <button className="p-2 text-xl px-10 border border-gray-300 text-gray-500 my-10  mr-4">Coupon code</button>
             <button className="p-2 bg-red-500 text-xl px-10 rounded-md font-semibold text-white mr-100">APPLY COUPON</button>
             <button onClick={changeCart} className="p-2 bg-red-500 text-xl px-10 rounded-md font-semibold text-white">UPDATE CART</button>
        </div>
    )
}
