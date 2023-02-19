// youtube.com/watch?v=5Y5QKfxTErU
import React from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'
import { styled, css } from '@mui/material'

import { CustomCalendar, Header } from './components'
import { Home } from './components/home'
import { CalendarProvider } from './context/calendarContext'
import { router } from './router'

const App = styled(() => {
  return (
    <CalendarProvider>
      <RouterProvider router={router} />
    </CalendarProvider>
  )
})(({ theme }) => {
  return css``
})

export default App
