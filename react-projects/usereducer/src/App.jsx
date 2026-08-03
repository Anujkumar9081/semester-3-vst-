import React, { useReducer } from 'react'

function reducer(state, action) {

  if (action.type === "add") {
    return state + 1
  }
   else if (action.type === "minus") {
    return state - 1
  } 
  else if (action.type === "restart") {
    return 0
  } 
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "add" })}>Add</button>
      <button onClick={() => dispatch({ type: "minus" })}>sub</button>
      <button onClick={() => dispatch({ type: "restart" })}>restart</button>
    </div>
  )
}

export default App