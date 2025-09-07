import { memo } from "react";
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
function Login() {
    return (
  <div className="h-screen w-screen flex  bg-blue-800">
      <form className="m-50 ml-80">
            <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-20 h-40 text-white"/></Link>
            <div className="relative ">
               <span className="text-gray-300 absolute top-7 text-xl left-15"><RiUser3Line /></span>
               <input className="text-white p-5 pl-12 m-2 h-15 rounded text-xl border border-gray-300 placeholder-gray-300" placeholder="USERNAME"/>
            </div>
           
            <br/>
             <div className="relative ">
             <span className="text-gray-300 absolute top-5 text-xl left-15"><RiLockPasswordFill /></span>
            <input className="text-white placeholder-gray-300 pl-12  p-5 h-15 text-xl rounded border border-gray-300 placeholder-gray-300" placeholder="PASSWORD"/>
            </div>
          <button className="text-xl text-blue-800 py-2 px-38 bg-white m-12 mb-2 rounded">LOGIN</button>
          <br/>
          <Link className="text-white text-xl ml-50 my-2" to="/" >Forgot password ?</Link>
        </form>
        
  </div>  
       
    )
 }
export default memo(Login);