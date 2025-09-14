import { memo } from "react";
import {  Formik , Form } from "formik"; 
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "./Input";
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
  
  // const { handleSubmit , handleChange , values ,errors , isValid , touched , handleBlur} = useFormik(
  //   {
  //     initialValues: {
  //       name: "" ,
  //       password:"" ,
  //     },

  //     onSubmit: apiDataSend,
  //     validationSchema: schema,
  //     validateOnMount:true,
  //   }
  // )
 const initialvalues=
        {
        name: "" ,
        password:"" ,
      }


    return (
  <div className="h-screen w-screen flex  bg-blue-800">
        <Formik
          onSubmit={apiDataSend}
          validationSchema= {schema}
          initialValues={initialvalues}
          validateOnMount
        >
        <Form
          className="m-50 mt-40 ml-80">
            <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-20 h-40 text-white"/></Link>
            <div className="relative ">
            <span className="text-gray-300 absolute top-6 text-xl left-18"><RiUser3Line /></span>
            
            <Input
               label=" Username"
               name="name" 
               type="text"
               placeholder="USERNAME" 
            />
            
           
            </div>
           
            <br/>
             <div className="relative ">
             <span className="text-gray-300 absolute top-6 text-xl left-18"><RiLockPasswordFill /></span>
           
            <Input
               label=" Username"
               name="password" 
               type="password"
               placeholder="PASSWORD" 
              />
           
            
            </div>
          <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-12 mb-2 rounded disabled:bg-gray-300 disabled:text-blue-300" > LOGIN </button>
          <br/>
          <Link className="text-white italic text-xl ml-50 my-2" to="/forgotPassword" >Forgot password ?</Link>

          <div className="flex m-10 text-xl pl-8 text-white">
           <p className="pr-3">Don't have an account ? </p>  <Link to='/signup'  className="underline "> Sign Up</Link>
          </div>
          
        </Form>
       </Formik>
  </div>  
       
    )
 }
export default memo(Login);