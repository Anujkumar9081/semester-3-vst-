import React from 'react'
import About from './components/about'
import Contect from './components/contect'
import Home from './components/home'
import Navbra from './components/Navbra'  
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
  <div>
    <Navbra />   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Contect' element={<Contect/>}/>
    </Routes>
  </div>
)
}

export default App
