import { useState } from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route} from "react-router-dom"
import Detailpage from './Detailpage'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
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
  const path = window.location.pathname

  return(
     <div  className='overflow-scroll h-screen  flex flex-col  bg-gray-50'>
      <Navbar totalcount={ totalcount} />
   <div className='grow'>
      <Routes>
      <Route  index element = {<Listpage/>} />
          <Route path="/product/:id" element={<Detailpage handleCart={ handleCart} />} />
    </Routes>
    </div>
   <Footer />
        </div>
  )
}
export default App