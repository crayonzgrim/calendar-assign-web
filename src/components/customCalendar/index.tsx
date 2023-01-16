import Calendar from 'react-calendar'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'

export const CustomCalendar = () => {
  const [value, onChange] = useState(new Date())

  return (
    <Box>
      <Calendar onChange={onChange} value={value} />
    </Box>
  )
}
