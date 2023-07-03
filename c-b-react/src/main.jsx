import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles.css"
import CustomHeader from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Users from "./components/Users"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <div>
    <BrowserRouter>
      <CustomHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </BrowserRouter>
    <hr />

  </div>


  // </React.StrictMode>,
)
