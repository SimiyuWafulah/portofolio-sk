import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
