import { useState } from 'react'
import './App.css'
import Listpage from './Listpage'
import {Routes , Route, BrowserRouter} from "react-router-dom"
import Detailpage from './Detailpage'
function App(){
  const path = window.location.pathname
  return(
    
    <Routes>
      <Route  path = "/Listpage" element = {<Listpage/>} />
      <Route path = "/Detailpage" element = {<Detailpage/>} />
    </Routes>
  
  )
}
export default App