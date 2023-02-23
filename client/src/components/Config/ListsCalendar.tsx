import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { BASE_URL } from '../../api'
import { CalendarInfoType } from '../../types'
import { Layout } from '../Layout'
import { ListAccordion } from './ListAccordion'

type ListsCalendarProps = {
  //
}

export const ListsCalendar = (props: ListsCalendarProps) => {
  /** Property */
  const { ...others } = props

  const [calendarInfo, setCalendarInfo] = useState<CalendarInfoType[]>([])

  /** Function */

  const getAllCalendarInfo = async () => {
    await axios
      .get(BASE_URL)
      .then((res) => setCalendarInfo(res.data.calendarInfo))
  }

  useEffect(() => {
    getAllCalendarInfo()
  }, [])

  /** Render */
  return (
    <Layout {...others}>
      <Typography sx={{ textAlign: 'center', mb: 2 }}>List Calendar</Typography>
      {calendarInfo.map((info: CalendarInfoType) => {
        if (info) {
          return (
            <ListAccordion
              key={info._id}
              info={info}
              // setCalendarInfo={setCalendarInfo}
            />
          )
        }

        return null
      })}
    </Layout>
  )
}
