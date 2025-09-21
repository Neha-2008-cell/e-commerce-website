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
        <div>
          {products.map(function (props) {
                return (
                    <div key={props.id}>{props.title}
                       
                        <input  value={localCart[props.id]} type="number" onChange={function (event) { handleChange(event , props.id) }} className="border border-gray-300 rounded-md m-5 border-2 w-12 p-1 h-8 pl-2 " />
                        <button  onClick={function () {
                             handleRemove(props.id)
                           }
                        }><ImCross /></button>
                       
                    </div>
                        
                )
                
            })} 
             <button onClick={changeCart} className="p-2 bg-red-900 rounded-full text-white">Update cart</button>
        </div>
    )
}
