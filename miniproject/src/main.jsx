import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom' // add this
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
   <BrowserRouter>
    <App />
  </BrowserRouter>,  // need to change to this
)
