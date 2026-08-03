import React, { useContext } from 'react'
import context from './Context'

const A = () => {                        // ← only ONE function
  const value = useContext(context)      // ← directly inside it

  return (
    <div>
      {value}
    </div>
  )
}

export default A