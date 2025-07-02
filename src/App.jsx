import React from 'react'
import "./index.css"
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar /><br /><br />
      <Outlet />
    </>
  )
}

export default App