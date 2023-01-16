import React from 'react'
import './App.css'
import { Body, CustomCalendar, Header } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <CustomCalendar />
      <Body />
    </div>
  )
}

export default App
