import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, styled, css } from '@mui/material'
import { Body, CalendarLib, CustomCalendar, Header } from './components'

const App = styled(() => {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/custom" element={<CustomCalendar />} />
          <Route path="/new" element={<CalendarLib />} />
        </Routes>
        <Body />
      </BrowserRouter>
    </Box>
  )
})(({ theme }) => {
  return css``
})

export default App
