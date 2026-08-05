import React, { useReducer } from 'react'

function reducer(state , action){
  if (action.type=="inc"){
    return state+1;
  }
  else if(action.type=="dec"){
  if(state>=0){return state-1};
  }
  
  }


const App = () => {
  const[state, dispatch] = useReducer(reducer , 0);
  
  return (
    <div>
     <h1> {state}</h1>
      <button onClick={()=>{dispatch({type:"inc"})}}>Like</button>
      <button onClick={()=>{dispatch({type:"dec"})}}>unlike</button>
     
    </div>
  )
}

export default App
