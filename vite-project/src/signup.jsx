import { memo } from "react";
import { withFormik} from "formik"; 
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { RiUser3Line } from "react-icons/ri";
import { LuShoppingCart } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Input  from "./Input";


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
    


 function Signup ({handleSubmit,handleChange,handleBlur,values,errors, touched}) {
    
        return (
      <div className="h-screen w-screen flex  bg-blue-800" onSubmit={handleSubmit}>
            {/* <Formik
               initialValues={initialValues }
               onSubmit= { apiDataSend }
               validationSchema= { schema }
               validateOnMount={ true}
            > */}
            <form
              className="m-50 mt-10 ml-80">
                <Link to="/"><LuShoppingCart className="w-40 ml-40 mb-10 h-40 text-white"/></Link>
                
                <div className="relative ">
                   <span className="text-gray-300 absolute top-6 text-xl left-16"><FaRegUserCircle /></span>
                
                  <Input
                  label=" Full name"
                  name="fullname" 
                  type="text"
                  placeholder="FULL NAME" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullname}
                  error={errors.fullname}
                  touched={touched.fullname}
                  className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                   />
                  </div>       
                
                  <div className="relative ">
                   <span className="text-gray-300 absolute  top-6 text-xl left-16"><MdEmail /></span>
                
                  <Input
                  label="Email"
                  name="email" 
                  type="email"
                  placeholder="EMAIL ADDRESS" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                  className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                   />

                </div>          

                 <div className="relative ">
                   <span className="text-gray-300 absolute top-6 text-xl left-16"><RiUser3Line /></span>
                
                   <Input
                  label=" Username"
                  name="name" 
                  type="text"
                  placeholder="USERNAME" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                  />
                  
                </div>   
               
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-6 text-xl left-16"><RiLockPasswordFill /></span>
                
                 <Input
                  label=" Password"
                  name="password" 
                  type="password"
                  placeholder="PASSWORD"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                  className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                   /> 
                  
                </div>
                
                 <div className="relative ">
                 <span className="text-gray-300 absolute top-6 text-xl left-16"><RiLockPasswordFill /></span>
                
                  <Input
                  label=" Confirm Password"
                  name="Confirmpassword" 
                  type="password"
                  placeholder="CONFIRM PASSWORD" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Confirmpassword}
                  error={errors.Confirmpassword}
                  touched={touched.Confirmpassword}
                  className="text-white p-5 pl-12 m-1 h-15 rounded text-xl border border-gray-300 placeholder-gray-300"
                   />
                  
                
                </div>    

              <button type="submit" className="text-xl text-blue-800 py-2 px-38 bg-white m-10  rounded disabled:bg-gray-300 disabled:text-blue-300" > Sign up </button>
             
    
              <div className="flex m-14 mt-1 text-xl pl-8 text-white">
               <p className="pr-3">Already have an account ? </p>  <Link to='/Login'  className="underline "> Login</Link>
              </div>
              
            </form>
          {/* </Formik>  */}
      </div>  
           
        )
 }
     
    const HOC = withFormik({ handleSubmit: apiDataSend, validationSchema: schema, initialValues: initialValues, validateOnMount:true})
    const EasySign = HOC(Signup )
    
    export default memo(EasySign);

    
    
