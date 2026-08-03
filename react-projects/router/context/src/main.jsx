import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Context from './Context.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Context.Provider value={"hoooo"}>
    <App />
    </Context.Provider>
  </BrowserRouter>,
)
