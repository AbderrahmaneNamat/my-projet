import React from 'react'
import Nav from './components/nav/Nav'
import Part1 from './components/parts/Part1'
import Part2 from './components/parts/Part2'
import Part3 from './components/parts/part3/Part3'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'

const App = () => {
  return (
    <div className=' ' >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>


    </div>
  )
}

export default App