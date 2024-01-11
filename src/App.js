import React from 'react'
import "./index.css"
import { Routes,Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <div className='bg-[#8435de]'>
        <Navbar/>
      </div>
      
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/Cart" element ={<Cart/>} />
      </Routes>

    </div>
  )
}

export default App