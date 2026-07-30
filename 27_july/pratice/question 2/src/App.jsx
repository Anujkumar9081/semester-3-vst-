import React from 'react'

import StudentID from './components/studentID'
const App = () => {
  return (
    <div>
      <StudentID Name ="Anuj yadav"  Rollno = {9} Course="CSE"/>
      <StudentID Name ="Ankit kumar"  Rollno = {10} Course="CSE A.I"/>
      <StudentID Name ="Ombeer singh"  Rollno = {15} Course="Army"/>
    </div>
  )
}

export default App
