import React from 'react'

const StudentID = ({Name , Rollno , Course}) => {
  return (
    <div>
      <h1>Name: {Name}</h1>
      <p>Rollno:{Rollno}</p>
      <p>Course: {Course}</p>
    </div>
  )
}

export default StudentID
