// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import RoomPage from './pages/room'
import ErrorPage from './pages/error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
