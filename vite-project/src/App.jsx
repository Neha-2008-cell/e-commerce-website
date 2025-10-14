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
import {range} from "lodash"
import CartdataProvider from './Providers.jsx/CartProvider.jsx'


function App() {
//console.log("lodash kaa magic", range(3,10,5))
 
  const location = useLocation()
  const path = location.pathname;

  
  return ( 
    <UserProvider>
    <CartdataProvider>
    <AlertProvider>
   
    
    <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      {path !== '/Login'&&  path !== '/signup' &&  path !== '/forgotPassword' && <Navbar  />}
        <div className='grow'>
      <Alert />
 <Routes> 
      <Route  index element = {<Loggedin><Listpage/></Loggedin>}/>
      <Route path="/product/:id" element={<Loggedin><Detailpage/></Loggedin>} />
      <Route path='/Cartpage' element={<Loggedin><Cartpage  /></Loggedin>} />
      <Route  path='/Login'  element = {<NonLoggedin><Login/></NonLoggedin>}/>
      <Route  path='/signup' element = {<NonLoggedin><Signup/></NonLoggedin>} />
      <Route path='/forgotPassword' element={<NonLoggedin><ForgotPassword/></NonLoggedin> } />
 </Routes>   
      
        </div>
      {path !=='/Login' && path !== '/signup' && path !== '/forgotPassword' && <Footer />}
      </div>
    
    
      </AlertProvider>
      </CartdataProvider>
    </UserProvider>
  )
}

export default App;
//cd ~/Desktop/Coding/vite-project