import React from 'react'
import { useState } from 'react'
import Display from './components/display';
import Controle from './components/controle';

const App = () => {
  let [count , setcount] = useState(0);
  return (
    <div>
      <Controle value = {setcount}  data={count}/>
      <Display value={count}/>
    </div>
  )
}

export default App
