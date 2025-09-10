import { Link } from 'react-router-dom';
import { useFormik } from "formik"; 
import * as Yup from 'yup';
import { IoMdArrowRoundBack } from "react-icons/io";
export default function ForgotPassword() {

   const schema = Yup.object().shape(
      {
        email: Yup.string().email().required(),
      }
    )

    const {  handleChange , values , handleBlur ,touched , errors , isValid , dirty} = useFormik(
    {
      initialValues: {
        email: "" ,
      },
      validationSchema:schema,
    }
  )
  
    return (
        <div className='h-screen flex items-center justify-center bg-gray-200'>
          <div className='bg-white w-200 h-150 p-20'>
            <div className='p-2 flex flex-col items-start'>
            <h1 className='text-4xl font-bold'>Forgot your password ?</h1>
            <p className='text- m-5 mb-10 ml-0'>Please enter your registered email to reset your password.</p>
            <form className=' flex flex-col items-start'>
            <label htmlFor='email'>Enter Email address :</label>
            <input 
            className='p-2 mb-5 rounded mt-2 border border-gray-400' 
            type='email'
            name='email'
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            id='email'
            placeholder='Enter your e-mail address  '/>
            {touched.email && errors.email && <div className="text-red-800">{errors.name}</div>}
            <button 
                type='submit'
                className='bg-red-800 px-40 py-3 text-white text-xl font-semibold rounded-[50px] my-10 disabled:bg-red-100'
                disabled={!isValid || !dirty}>
                Request password reset
                </button>
            <Link className='flex gap-2 mx-50 text-xl text-blue-900' to='/Login'><IoMdArrowRoundBack className='mt-1'/> Back to Login</Link>
            </form>
            </div>
          </div>
        </div>
    )
}
