import  { useState , createContext} from 'react'
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
export const totalCountContext = createContext()
export const countdata = createContext()

function App() {
  let getdata = localStorage.getItem("cartstorage") || "{}"
  let cartobject = JSON.parse(getdata)
  let[cart,setcart] = useState(cartobject)          
  
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

  
  const cartdata = { cart,updateCart}

  return (  
    <totalCountContext.Provider value={{ totalcount }}>
      <countdata.Provider value={cartdata}>
     <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      {path !== '/Login'&&  path !== '/signup' &&  path !== '/forgotPassword' && <Navbar  />}
   <div className='grow'>
      <Routes>
      <Route  index element = {<Listpage/>} />
      <Route path="/product/:id" element={<Detailpage handleCart={ handleCart} />} />
      <Route  path='/Login' element = {<Login/>} />
      <Route  path='/signup' element = {<Signup/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/> } />
            <Route path='/Cartpage' element={<Cartpage  />} />
    </Routes>
    </div>
      {path !=='/Login' && path !== '/signup' && path !== '/forgotPassword' && <Footer />}
      </div>
      </countdata.Provider>
    </totalCountContext.Provider>
  )
}
export default App;