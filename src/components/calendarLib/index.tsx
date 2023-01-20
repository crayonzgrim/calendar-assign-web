import React, { useMemo, useState } from 'react'
import { Box, Typography, styled, css } from '@mui/material'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { DateTime } from 'luxon'
import { FormatDate } from '../../utils/formatDate'

type CalendarLibProps = {
  //
}

export const CalendarLib = styled((props: CalendarLibProps) => {
  /** Render */
  const { ...others } = props

  const [value, onChange] = useState([new Date(), new Date()])

  const [start, end] = value

  const startDate = new Date(start).toISOString()
  const endDate = new Date(end).toISOString()

  const formatedStartDate = useMemo(() => {
    const sYear = DateTime.fromISO(startDate).year
    const sMonth = DateTime.fromISO(startDate).month
    const sDay = DateTime.fromISO(startDate).day

    return `${sYear}-${sMonth}-${sDay}`
  }, [startDate])

  const formatedEndDate = useMemo(() => {
    const eYear = DateTime.fromISO(endDate).year
    const eMonth = DateTime.fromISO(endDate).month
    const eDay = DateTime.fromISO(endDate).day

    return `${eYear}-${eMonth}-${eDay}`
  }, [endDate])

  /** Function */

  /** Render */
  return (
    <Box {...others}>
      <Calendar
        value={start}
        onChange={onChange}
        selectRange={true}
        showNeighboringMonth={false}
        // formatDay={(locale, date) => DateTime.fromISO(startDate).toFormat('dd')} // 날'일' 제외하고 숫자만 보이도록 설정
        tileContent={({ activeStartDate, date, view }) => {
          // console.log('activeStartDate > ', activeStartDate)
          // console.log('date > ', new Date(date).toISOString())
          // console.log('view > ', view)
          if (
            new Date(date).toISOString().replace(/T.*$/, '') ===
            startDate.replace(/T.*$/, '')
          ) {
            return (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box className="dot"></Box>
              </Box>
            )
          }

          return null
        }}
      />
      <Box>
        <Typography>시작 날짜 : {formatedStartDate}</Typography>
        <Typography>마지막 날짜 : {formatedEndDate}</Typography>
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    .react-calendar {
      border: 2px dashed red;
      width: 100%;

      .dot {
        height: 8px;
        width: 8px;
        background-color: #097969;
        border-radius: 50%;
      }
    }
  `
})
