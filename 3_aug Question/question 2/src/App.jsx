import { useReducer } from "react";


function reducer(e) {
  const next = {
    Red: "Yellow",
    Yellow: "Green",
    Green: "Red",
  };
  return next[e]; 
}

export default function App() {
  const [color, dispatch] = useReducer(reducer, "Red"); 

  return (
    <div>
      <h2 style={{ color: color.toLowerCase() }}>{color}</h2>
      <button onClick={() => dispatch()}>Next</button>
    </div>
  );
}