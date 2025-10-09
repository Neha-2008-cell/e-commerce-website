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
import Loggedin from './Loggedin.jsx'
import NonLoggedin from './NonLoggedin.jsx'
export const totalCountContext = createContext()
export const countdata = createContext()
export const userData = createContext()
function App() {
  const getdata = localStorage.getItem("cartstorage") || "{}"
  const cartobject = JSON.parse(getdata)
  const [cart, setcart] = useState(cartobject) 
   const [ user, setUser ] = useState(null);
  
  
  
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
  const userinfo = {user , setUser}
  return ( 
    <userData.Provider value ={userinfo}>
    <totalCountContext.Provider value={{ totalcount }}>
    <countdata.Provider value={cartdata}>
     <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      {path !== '/Login'&&  path !== '/signup' &&  path !== '/forgotPassword' && <Navbar  />}
      <div className='grow'>
        <Routes>
          
   <Route  index element = {<Loggedin><Listpage/></Loggedin>}/>
      <Route path="/product/:id" element={<Detailpage handleCart={ handleCart} />} />
      <Route path='/Cartpage' element={<Cartpage  />} />
  
    <Route  path='/Login'  element = {<NonLoggedin><Login setUser={setUser } /></NonLoggedin>}/>
      
      <Route  path='/signup' element = {<Signup/>} />
      <Route path='/forgotPassword' element={<ForgotPassword/> } />
    
      </Routes>
        </div>
      {path !=='/Login' && path !== '/signup' && path !== '/forgotPassword' && <Footer />}
      </div>
      </countdata.Provider>
      </totalCountContext.Provider>
      </userData.Provider>
  )
}
export default App;