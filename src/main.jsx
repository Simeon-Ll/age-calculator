import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Logic from './logic.js'
// alert('Enter your age in the format Day: 13 Month: 5 Year: 2003')


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  logic = {Logic}/>
  </React.StrictMode>,
)
