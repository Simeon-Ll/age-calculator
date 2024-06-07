import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Logic from './logic.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  logic = {Logic}/>
  </React.StrictMode>,
)
