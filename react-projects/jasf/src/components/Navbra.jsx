import React from 'react'
import { Link } from 'react-router-dom'

const Navbra = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Contect">Contact</Link>
    </div>
  )
}

export default Navbra