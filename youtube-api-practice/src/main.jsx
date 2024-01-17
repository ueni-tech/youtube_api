import React from 'react'
import ReactDOM from 'react-dom/client'
import 'ress/dist/ress.min.css'
import './index.css'
import Home from './pages/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
