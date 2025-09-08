import { memo } from "react";
import { useFormik } from "formik"; 
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
function Login() {

  function apiDataSend(event) {
        console.log("Sending data",values.email,values.password)
     }

  const { handleSubmit , handleChange , values } = useFormik(
    {
      initialValues: {
        email: "" ,
        password:"" ,
      },

      onSubmit:apiDataSend
    }
  )


    return (
  <div className="h-screen w-screen flex  bg-blue-800">
        <form
          onSubmit={handleSubmit}
          className="m-50 ml-80">
            <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-20 h-40 text-white"/></Link>
            <div className="relative ">
               <span className="text-gray-300 absolute top-7 text-xl left-15"><RiUser3Line /></span>
            <input
              className="text-white p-5 pl-12 m-2 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
              name="email" 
              value={values.email}
              onChange={handleChange}
              required
              placeholder="USERNAME" />
            </div>
           
            <br/>
             <div className="relative ">
             <span className="text-gray-300 absolute top-5 text-xl left-15"><RiLockPasswordFill /></span>
            <input
              className="text-white placeholder-gray-300 pl-12  p-5 h-15 text-xl rounded border border-gray-300 placeholder-gray-300"
              name="password" 
              value={values.password}
              onChange={handleChange}
              required
              type="password"
              placeholder="PASSWORD" />
            </div>
          <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-12 mb-2 rounded">LOGIN</button>
          <br/>
          <Link className="text-white italic text-xl ml-50 my-2" to="/" >Forgot password ?</Link>
        </form>
        
  </div>  
       
    )
 }
export default memo(Login);