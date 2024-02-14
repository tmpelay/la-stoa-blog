import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'

import Theme from './components/Theme/Theme'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'

function App() {
  const [theme, setTheme] = useState("light")

  return (
    <>
      <Theme theme={theme} setTheme={setTheme} />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home theme={theme} />} />
        <Route path='/blog' element={<Blog theme={theme} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
