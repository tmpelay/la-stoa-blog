import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Theme from './components/Theme/Theme'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <Theme theme={theme} setTheme={setTheme} />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home theme={theme} />} />
      </Routes>
    </>
  )
}

export default App
