import { useState } from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import Detailpage from './Detailpage'
function App(){
  const path = window.location.pathname
  return(
    
    <Routes>
      <Route  index element = {<Listpage/>} />
      <Route path = "/product/:sku" element = {<Detailpage/>} />
    </Routes>
  
  )
}
export default App