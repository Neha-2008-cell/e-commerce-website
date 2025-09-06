import { memo } from "react"
import { LuShoppingCart } from "react-icons/lu";
function Login() {
    return (
  <div className="h-screen w-screen flex justify-center items-center bg-blue-800">
      <form className="">
            <LuShoppingCart className="w-40 h-40 text-white"/>
            <input className="text-white  placeholder-white" placeholder="email"/>
            <br/>
            <input className="text-white placeholder-white" placeholder="password"/>
        </form>
  </div>  
       
    )
 }
export default memo(Login);