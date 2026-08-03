import React from 'react'
import { Link } from 'react-router-dom'
import AboutMe from './AboutMe'
import Home from './Home'

const NabBar = () => {
  return (
    <div>
      <Link to={'/'}>
      <li>Home</li>
      </Link>
      
      <Link to={'/About'}>
      Aboutme
      </Link>

      <li>list</li>

    </div>
  )
}

export default NabBar
