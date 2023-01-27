import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, styled, css } from '@mui/material'
import { Body, CustomCalendar, Header } from './components'
import { Home } from './components/home'

const App = styled(() => {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CustomCalendar />} />
        </Routes>
        <Body />
      </BrowserRouter>
    </Box>
  )
})(({ theme }) => {
  return css``
})

export default App
