import React from 'react'
import { useState } from 'react'
import { use } from 'react'

const App = () => {
 const[arr , setarr] = useState(["task1", "task2"]);
  const[task , settask] = useState("");

  function change(){
    setarr([...arr , task])
    settask("")
  }


  return (
    <div>
      <input type='text'value={task}
      onChange={(e)=>{settask(e.target.value)}}
      placeholder='Enter new task'/>
    <button onClick={change} >Click me to add</button>
    </div>
  )
}

export default App
