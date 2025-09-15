import { memo } from "react";
import { Formik , Form} from "formik"; 
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FormikInput from "./FormikInput"

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
      
     
   const initialValues = {
            name: "" ,
            fullname:"",
            email:"",
            password:"" ,
            Confirmpassword:"",
    }
    
        return (
      <div className="h-screen w-screen flex  bg-blue-800">
            <Formik
               initialValues={initialValues }
               onSubmit= { apiDataSend }
               validationSchema= { schema }
               validateOnMount={ true}
            >
            <Form
              className="m-50 mt-10 ml-80">
                <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-10 h-40 text-white"/></Link>
                
                <div className="relative ">
                   <span className="text-gray-300 absolute top-6 text-xl left-16"><FaRegUserCircle /></span>
                
                  <FormikInput
                  label=" Full name"
                  name="fullname" 
                  type="text"
                  placeholder="FULL NAME" 
                   />
                  </div>       
                
                  <div className="relative ">
                   <span className="text-gray-300 absolute  top-6 text-xl left-16"><MdEmail /></span>
                
                  <FormikInput
                  label="Email"
                  name="email" 
                  type="email"
                  placeholder="EMAIL ADDRESS" 
                   />

                </div>          

                 <div className="relative ">
                   <span className="text-gray-300 absolute top-6 text-xl left-16"><RiUser3Line /></span>
                
                   <FormikInput
                  label=" Username"
                  name="name" 
                  type="text"
                  placeholder="USERNAME" 
                  
                  />
                  
                </div>   
               
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-6 text-xl left-16"><RiLockPasswordFill /></span>
                
                 <FormikInput
                  label=" Password"
                  name="password" 
                  type="password"
                  placeholder="PASSWORD" 
                   /> 
                  
                </div>
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-6 text-xl left-16"><RiLockPasswordFill /></span>
                
                  <FormikInput
                  label=" Confirm Password"
                  name="Confirmpassword" 
                  type="password"
                  placeholder="CONFIRM PASSWORD" 
                   />
                  
                
                </div>    

              <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-10  rounded disabled:bg-gray-300 disabled:text-blue-300" > Sign up </button>
             
    
              <div className="flex m-14 mt-1 text-xl pl-8 text-white">
               <p className="pr-3">Already have an account ? </p>  <Link to='/Login'  className="underline "> Login</Link>
              </div>
              
            </Form>
          </Formik> 
      </div>  
           
        )
     }
    export default memo(Signup)
    
