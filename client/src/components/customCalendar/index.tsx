import { useCallback, useContext, useEffect, useState } from 'react'
import { Box, TextField, styled, css, Typography, Divider } from '@mui/material'
import axios from 'axios'

import FullCalendar from '@fullcalendar/react'
import { DateSelectArg, EventClickArg } from '@fullcalendar/core'
import allLocales from '@fullcalendar/core/locales-all'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { DateForm } from '../dateForm'
import { CalendarContextType, CalendarInfoType } from '../../types'
import { CalendarContext } from '../../context'
import { Accordion } from '../Accordian'
import { BASE_URL } from '../../api'
import { Layout } from '../Layout'

type CustomCalendarProps = {
  //
}

export const CustomCalendar = styled((props: CustomCalendarProps) => {
  /** Property */
  const { ...others } = props

  const { calendarInfo, saveCalendarInfo, updateCalendarInfo } = useContext(
    CalendarContext
  ) as CalendarContextType

  const [formInfo, setFormInfo] = useState<CalendarInfoType>({
    // id: crypto.randomUUID(),
    title: '',
    start: '',
    end: '',
    display: '',
    backgroundColor: ''
  })

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const [memo, setMemo] = useState<string>('')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  /** Function */
  // const fetchHandler = async () => {
  //   await axios.get(BASE_URL).then((res) => setFormInfo(res.data.calendarInfo))
  // }
  //
  // useEffect(() => {
  //   fetchHandler()
  // }, [])

  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      // let title = prompt('hello world')?.trim()
      const calendarApi = selectInfo.view.calendar

      calendarApi.unselect()

      console.log('calendarApi > ', calendarApi)

      // calendarApi.addEvent(info)
      //     id: new Date().toString(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay

      if (formInfo) {
        calendarApi.addEvent({
          id: crypto.randomUUID(),
          // title: formInfo.title,
          title: '',
          start: selectInfo.start,
          end: selectInfo.end,
          allDay: selectInfo.allDay
        })
      }
    },
    [formInfo]
  )

  const handleEventClick = useCallback(
    (data: EventClickArg) => {
      calendarInfo.map((item) => {
        const clickedId = data.event?._def?.extendedProps?._id

        if (item._id === clickedId) {
          console.log('item >> ', item)
          setMemo(item.display)
        }
        return undefined
      })
    },
    [calendarInfo, memo]
  )

  /** Render */
  return (
    <Layout>
      <Box>
        <FullCalendar
          // plugins={[dayGridPlugin, interactionPlugin]}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          events={calendarInfo}
          locales={allLocales}
          locale="ko"
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </Box>

      {memo && (
        <Box sx={{ mt: 4, border: '1px solid lightGray', height: '50px' }}>
          <Typography>{memo ?? ''}</Typography>
        </Box>
      )}

      <Divider
        orientation={'horizontal'}
        sx={{ border: '0.5px solid lightGray', mt: 5, mb: 5, mx: 6 }}
      />

      <Accordion
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        handleDateSelect={handleDateSelect}
      />
    </Layout>
  )
})(({ theme }) => {
  return css``
})
