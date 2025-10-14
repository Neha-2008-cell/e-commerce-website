import {useState} from "react";
import { cartContext } from "../CreateContexts";
export default function CartdataProvider ({children}) {
    
     const getdata = localStorage.getItem("cartstorage") || "{}"
      const cartobject = JSON.parse(getdata)
      
      const [cart, setcart] = useState(cartobject) 
      
      function handleCart(id, count) {
        const oldCount = cart[id] || 0
        const newCart = { ...cart, [id]: oldCount + count }
        updateCart(newCart)
      }
    
      function updateCart(newCart) {
        setcart(newCart);
        let cartstring = JSON.stringify(newCart)
        localStorage.setItem("cartstorage",cartstring)
     }
    
      const totalcount = Object.keys(cart).reduce(function (output,current) {
          return output + cart[current]
      }, 0)
      
    
    return (
        <>
            <cartContext.Provider value={{ cart, updateCart, totalcount , handleCart}}>{children}</cartContext.Provider>
        </>
    )
}

