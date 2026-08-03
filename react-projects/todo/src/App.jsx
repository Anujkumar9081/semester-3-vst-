import React from 'react'
import { useState } from 'react'

const App = () => {
  const [add, setadd] = useState("");
  const [notes, setNotes] = useState([]);   

  function abc() {
    setNotes([...notes,add]);           
    setadd("");                            
  }

  return (
    <div>
      <input type="text" placeholder="Write your notes" value={add}onChange={(e) => setadd(e.target.value)}/>
      <button onClick={abc}>Add notes</button>

   {notes.map((note, index) => (
       <h1> <p key={index}>{note}</p></h1>
      ))}

    </div>
  )
}

export default App