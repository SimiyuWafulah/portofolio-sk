import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  )
}

export default App
