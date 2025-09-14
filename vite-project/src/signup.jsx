import { memo } from "react";
import { useFormik } from "formik"; 
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

 function Signup () {
     function apiDataSend(values) {
            console.log("Sending data",values.name,values.password)
         }
    
      const schema = Yup.object().shape(
        {
          name: Yup.string().required("This field is required").min(3),
          password:Yup.string().required("This field is required").min(8),
          fullname:Yup.string().required("This field is required").min(3),
          email:Yup.string().required("This field is required").email(),
        Confirmpassword:Yup.string().oneOf([Yup.ref("password")],"Passwords must be match.").required("This field is required").min(8),
        }
      )
      
      const { handleSubmit , handleChange , values ,errors , isValid , touched , handleBlur ,dirty} = useFormik(
        {
          initialValues: {
            name: "" ,
            fullname:"",
            email:"",
            password:"" ,
        Confirmpassword:"",
          },
    
          onSubmit: apiDataSend,
          validationSchema:schema,
        }
      )
    
    
        return (
      <div className="h-screen w-screen flex  bg-blue-800">
            <form
              onSubmit={handleSubmit}
              className="m-50 mt-20 ml-80">
                <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-10 h-40 text-white"/></Link>
                
                <div className="relative ">
                   <span className="text-gray-300 absolute top-7 text-xl left-15"><FaRegUserCircle /></span>
                
                  <label htmlFor="fullname" className="sr-only">
                  Full name
                </label>
                <input
                  className="text-white p-5 pl-12 m-2 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                  name="fullname" 
                  id="fullname"
                  onBlur={handleBlur}
                  value={values.fullname}
                  onChange={handleChange}
                  type="text"
                  placeholder="FULL NAME" />
                {touched.fullname && errors.fullname && <div className="text-red-800">{errors.fullname}</div>}
                </div>       
                
                  <div className="relative ">
                   <span className="text-gray-300 absolute top-7 text-xl left-15"><MdEmail /></span>
                
                  <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  className="text-white p-5 pl-12 m-2 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                  name="email" 
                  id="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  type="text"
                  placeholder="EMAIL ADDRESS" />
                {touched.email && errors.email && <div className="text-red-800">{errors.email}</div>}
                </div>          

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
               
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-5 text-xl left-15"><RiLockPasswordFill /></span>
                <label htmlFor="pswd" className="sr-only">
                  Password
                </label>
                <input
                  className="text-white placeholder-gray-300 pl-12 m-2 p-5 h-15 text-xl rounded border border-gray-300 placeholder-gray-300"
                  name="password" 
                  id="pswd"
                  onBlur={handleBlur}
                  value={values.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="PASSWORD" />
                  {touched.password && errors.password && <div className="text-red-800">{errors.password}</div>}
                </div>
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-5 text-xl left-15"><RiLockPasswordFill /></span>
                <label htmlFor="cfpswd" className="sr-only">
                 Confirm Password
                </label>
                <input
                  className="text-white placeholder-gray-300 pl-12 m-2 p-5 h-15 text-xl rounded border border-gray-300 placeholder-gray-300"
                  name="Confirmpassword" 
                  id="cfpswd"
                  onBlur={handleBlur}
                  value={values.Confirmpassword}
                  onChange={handleChange}
                  type="password"
                  placeholder="CONFIRM PASSWORD" />
                  {touched.Confirmpassword && errors.Confirmpassword && <div className="text-red-800">{errors.Confirmpassword}</div>}
                </div>    

              <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-12 mb-2 rounded disabled:bg-gray-300 disabled:text-blue-300" disabled={!isValid || !dirty}> Sign up </button>
             
    
              <div className="flex m-14 text-xl pl-8 text-white">
               <p className="pr-3">Already have an account ? </p>  <Link to='/Login'  className="underline "> Login</Link>
              </div>
              
            </form>
           
      </div>  
           
        )
     }
    export default memo(Signup)
    
