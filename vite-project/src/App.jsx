import { useState } from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route} from "react-router-dom"
import Detailpage from './Detailpage'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
function App(){
  const path = window.location.pathname
  return(
     <div  className='overflow-scroll h-screen flex flex-col  bg-gray-50'>
      <Navbar />
   <div className='grow'>
      <Routes>
      <Route  index element = {<Listpage/>} />
      <Route path = "/product/:id" element = {<Detailpage/>} />
    </Routes>
    </div>
   <Footer />
        </div>
  )
}
export default App