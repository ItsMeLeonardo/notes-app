import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { getToken } from './service/getNotes'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
