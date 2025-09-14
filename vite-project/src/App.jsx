import React , { useState , createContext} from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route, useLocation} from "react-router-dom"
import Detailpage from './Detailpage'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Signup from './signup.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import Cartpage from './Cartpage.jsx'
export const totalCountContext = React.createContext()
function App() {
  let getdata = localStorage.getItem("cart") || "{}"
  let cartobject = JSON.parse(getdata)
  let[cart,setcart] = useState(cartobject)          
  
  function handleCart(id, count) {
    const oldCount = cart[id] || 0
    const newCart = { ...cart, [id]: oldCount + count }
    setcart(newCart);
    let cartstring = JSON.stringify(newCart)
    localStorage.setItem("cart",cartstring)
  }
    const totalcount = Object.keys(cart).reduce(function (output,current) {
      return output + cart[current]
    }, 0)
  const location = useLocation()
  const path = location.pathname;

  
  

  return (
    <totalCountContext.Provider value={{totalcount}}>
     <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      {path !== '/Login'&&  path !== '/signup' &&  path !== '/forgotPassword' && <Navbar  />}
   <div className='grow'>
      <Routes>
      <Route  index element = {<Listpage/>} />
      <Route path="/product/:id" element={<Detailpage handleCart={ handleCart} />} />
      <Route  path='/Login' element = {<Login/>} />
      <Route  path='/signup' element = {<Signup/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/> } />
      <Route  path='/Cartpage' element = {<Cartpage/>} />
    </Routes>
    </div>
      {path !=='/Login' && path !== '/signup' && path !== '/forgotPassword' && <Footer />}
      </div>
      </totalCountContext.Provider>
  )
}
export default App;