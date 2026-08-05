import React, { useReducer } from 'react'

function reducer(state , action){
  if (action.type=="inc"){
    return state+1;
  }
  else if(action.type=="dec"){
    if(state<=1){
      alert("item can not be zero")
    }
    else{
      return state-1
    }
  }
  else if(action.type=="restart"){
    return 0;
  }

  }


const App = () => {
  const[state, dispatch] = useReducer(reducer , 1);
  
  return (
    <div>
     <h1> {state}</h1>
      <button onClick={()=>{dispatch({type:"inc"})}}>Inc</button>
      <button onClick={()=>{dispatch({type:"dec"})}}>Dec</button>
      <button onClick={()=>{dispatch({type:"restart"})}}>restart</button>
    </div>
  )
}

export default App
