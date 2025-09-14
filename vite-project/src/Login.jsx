import { memo } from "react";
import { useFormik } from "formik"; 
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
function Login() {

  function apiDataSend(values) {
        console.log("Sending data",values.name,values.password)
     }

  const schema = Yup.object().shape(
    {
      name: Yup.string().required(),
      password:Yup.string().required().min(8)
    }
  )
  
  const { handleSubmit , handleChange , values ,errors , isValid , touched , handleBlur ,dirty} = useFormik(
    {
      initialValues: {
        name: "" ,
        password:"" ,
      },

      onSubmit: apiDataSend,
      validationSchema:schema,
    }
  )


    return (
  <div className="h-screen w-screen flex  bg-blue-800">
        <form
          onSubmit={handleSubmit}
          className="m-50 mt-40 ml-80">
            <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-20 h-40 text-white"/></Link>
            <div className="relative ">
               <span className="text-gray-300 absolute top-7 text-xl left-15"><RiUser3Line /></span>
            <label htmlFor="name" className="sr-only">
              Username
            </label>
            <input
              className="text-white p-5 pl-12 m-2 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
              name="name" 
              id="name"
              onBlur={handleBlur}
              value={values.name}
              onChange={handleChange}
              type="text"
              placeholder="USERNAME" />
            {touched.name && errors.name && <div className="text-red-800">{errors.name}</div>}
            </div>
           
            <br/>
             <div className="relative ">
             <span className="text-gray-300 absolute top-5 text-xl left-15"><RiLockPasswordFill /></span>
            <label htmlFor="pswd" className="sr-only">
              Password
            </label>
            <input
              className="text-white placeholder-gray-300 pl-12  p-5 h-15 text-xl rounded border border-gray-300 placeholder-gray-300"
              name="password" 
              id="pswd"
              onBlur={handleBlur}
              value={values.password}
              onChange={handleChange}
              type="password"
              placeholder="PASSWORD" />
              {touched.password && errors.password && <div className="text-red-800">{errors.password}</div>}
            </div>
          <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-12 mb-2 rounded disabled:bg-gray-300 disabled:text-blue-300" disabled={!isValid || !dirty}> LOGIN </button>
          <br/>
          <Link className="text-white italic text-xl ml-50 my-2" to="/forgotPassword" >Forgot password ?</Link>

          <div className="flex m-10 text-xl pl-8 text-white">
           <p className="pr-3">Don't have an account ? </p>  <Link to='/signup'  className="underline "> Sign Up</Link>
          </div>
          
        </form>
       
  </div>  
       
    )
 }
export default memo(Login);