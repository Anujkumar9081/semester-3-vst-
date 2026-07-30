import React from 'react'

const Controle = ({value , data}) => {
  return (
    <div>
      <button onClick={()=>{value(data+1)}}>Increase</button>
      <button onClick={()=>{value(data-1)}}>Decrease</button>
    </div>
  )
}

export default Controle
