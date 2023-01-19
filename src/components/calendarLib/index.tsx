import React, { useState } from 'react'
import { Box, Typography, styled, css } from '@mui/material'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { DateTime } from 'luxon'

type CalendarLibProps = {
  //
}

export const CalendarLib = styled((props: CalendarLibProps) => {
  /** Render */
  const { ...others } = props

  const [value, onChange] = useState([new Date(), new Date()])

  const [start, end] = value

  const startDate = new Date(start).toISOString().replace(/T.*$/, '')
  const endDate = new Date(end).toISOString().replace(/T.*$/, '')

  /** Function */

  /** Render */
  return (
    <Box {...others}>
      <Calendar
        value={start}
        onChange={onChange}
        selectRange={true}
        allowPartialRange={true}
      />
      <Box>
        <Typography>시작 날짜 : {startDate}</Typography>
        <Typography>마지막 날짜 : {endDate}</Typography>
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    .react-calendar {
      border: 2px dashed red;
      width: 100%;
    }
  `
})
