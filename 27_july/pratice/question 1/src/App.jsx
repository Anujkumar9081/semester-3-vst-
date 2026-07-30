import React, { useState } from 'react'

const App = () => {
  let[value , setvalue] = useState(0);

  return (
    <div>
      <button onClick={()=>{if(value<10){setvalue(value+1)}}}>Increase</button>
      <p>{value}</p>
      <button onClick={()=>{if(value>0){setvalue(value-1)}}}>Decrease</button>

    </div>
  )
}

export default App
