import  {useEffect , useState} from "react";
import { getdetail } from "./api";
import { ImCross } from "react-icons/im";
import Loading from "./Loading";
export default function Cartpage({cart , updateCart}) {
   
    let [products,setproducts] = useState([])
    let [loading, setloading] = useState(true)
    const ProductIds = Object.keys(cart)
   
    useEffect(function () { 
        const allpromises =  ProductIds.map(function (id) {
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

    
    function handleRemove(event) {
        const newcart = {...cart}
        const removeId = event.currentTarget.getAttribute("removeId")
        delete newcart[removeId]
        updateCart(newcart)
        setloading(true)
        console.log("cart", cart , "newcart" , newcart)
    }
    
    
    return (
        <div>
            {products.map(function (props) {
                return (
                    <div key={props.id}>{props.title}
                        {" "}
                        <input type="number" className="border border-gray-300 rounded-md m-5 border-2 w-12 p-1 h-8 pl-2 " value={cart[props.id] }/>
                        <button removeId={props.id} onClick = {handleRemove}><ImCross /></button></div>
                )
                
           })} 
        </div>
    )
}

