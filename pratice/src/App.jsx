import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [city, setCity] = useState("Agra");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      {data.map((a , b ,c) => (
       <>
          <h1>{a.id}</h1>
          <h2>{a.title}</h2>
          </>
      ))}

      <h3>{city}</h3>
      <button onClick={() => setCity("Delhi")}>Change City</button>

      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default App;