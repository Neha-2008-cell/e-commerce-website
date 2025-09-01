import { useState } from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route} from "react-router-dom"
import Detailpage from './Detailpage'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function App() {
  let [totalcount,updatecount]=useState(0)
  function handleCart(id,count) {
    console.log("id is :", id, "count is", count)
    updatecount(totalcount + count)
  }
  const path = window.location.pathname
  return(
     <div  className='overflow-scroll h-screen flex flex-col  bg-gray-50'>
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