import { useState, createContext } from 'react'
import {Routes , Route, useLocation} from "react-router-dom"


import './App.css'
import Listpage from './Listpage'
import Detailpage from './Detailpage'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Login from './Login.jsx';
import Signup from './signup.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import Cartpage from './Cart.jsx/Cartpage.jsx'
import Loggedin from './Loggedin.jsx'
import NonLoggedin from './NonLoggedin.jsx'
import Alert from './Alert.jsx'
import UserProvider from './Providers.jsx/UserProvider.jsx'
import AlertProvider from './Providers.jsx/AlertProvider.jsx'
import { totalCountContext , countdata } from './CreateContexts.jsx'


function App() {

  const getdata = localStorage.getItem("cartstorage") || "{}"
  const cartobject = JSON.parse(getdata)
  
  const [cart, setcart] = useState(cartobject) 
  
  function handleCart(id, count) {
    const oldCount = cart[id] || 0
    const newCart = { ...cart, [id]: oldCount + count }
    updateCart(newCart)
  }

  function updateCart(newCart) {
    setcart(newCart);
    let cartstring = JSON.stringify(newCart)
    localStorage.setItem("cartstorage",cartstring)
 }

  const totalcount = Object.keys(cart).reduce(function (output,current) {
      return output + cart[current]
  }, 0)
  
  const location = useLocation()
  const path = location.pathname;

  
  return ( 
    <UserProvider>
    <AlertProvider>
    <totalCountContext.Provider value={{ totalcount }}>
    <countdata.Provider value={{ cart,updateCart}}>
    
    <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      {path !== '/Login'&&  path !== '/signup' &&  path !== '/forgotPassword' && <Navbar  />}
        <div className='grow'>
      <Alert />
 <Routes> 
      <Route  index element = {<Loggedin><Listpage/></Loggedin>}/>
      <Route path="/product/:id" element={<Loggedin><Detailpage handleCart={ handleCart} /></Loggedin>} />
      <Route path='/Cartpage' element={<Loggedin><Cartpage  /></Loggedin>} />
      <Route  path='/Login'  element = {<NonLoggedin><Login/></NonLoggedin>}/>
      <Route  path='/signup' element = {<NonLoggedin><Signup/></NonLoggedin>} />
      <Route path='/forgotPassword' element={<NonLoggedin><ForgotPassword/></NonLoggedin> } />
 </Routes>   
      
        </div>
      {path !=='/Login' && path !== '/signup' && path !== '/forgotPassword' && <Footer />}
      </div>
    
      </countdata.Provider>
      </totalCountContext.Provider>
      </AlertProvider>
    </UserProvider>
  )
}

export default App;
//cd ~/Desktop/Coding/vite-project