import { useCallback, useEffect, useState } from 'react'
import { Box, TextField, styled, css, Typography, Divider } from '@mui/material'
import { useSelector } from 'react-redux'

import FullCalendar from '@fullcalendar/react'
import { DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core'
import allLocales from '@fullcalendar/core/locales-all'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { DateForm } from '../dateForm'
import { RootState } from '../../redux/store'
import { CalendarInfoType } from '../../types'

type CustomCalendarProps = {
  //
}

export const CustomCalendar = styled((props: CustomCalendarProps) => {
  /** Property */
  const { ...others } = props

  const calendarInfo = useSelector((state: RootState) => state.addCalendar.info)

  const [config, setConfig] = useState<CalendarInfoType>({
    id: crypto.randomUUID().toString(),
    title: '',
    start: new Date(),
    end: new Date(),
    url: '',
    backgroundColor: ''
  })

  const [customTitle, setCustomTitle] = useState('')

  /** Function */
  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      // let title = prompt('hello world')?.trim()
      const calendarApi = selectInfo.view.calendar

      calendarApi.unselect()

      // calendarApi.addEvent(info)
      //     id: new Date().toString(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay

      if (config) {
        calendarApi.addEvent({
          id: crypto.randomUUID(),
          title: config.title,
          start: selectInfo.start,
          end: selectInfo.end,
          allDay: selectInfo.allDay
        })
      }
    },
    [config]
  )

  const handleEventClick = useCallback(
    (data: EventClickArg) => {
      calendarInfo.map((item) => {
        if (item.id === data.event.id) {
          console.log(item)
          //   alert(item.memo)
        }

        return undefined
      })
    },
    [calendarInfo]
  )

  console.log('calendarInfo >> ', calendarInfo)

  /** Render */
  return (
    <Box {...others}>
      <DateForm
        config={config}
        setConfig={setConfig}
        handleDateSelect={handleDateSelect}
        customTitle={customTitle}
        setCustomTitle={setCustomTitle}
      />

      <Divider
        orientation={'horizontal'}
        sx={{ border: '0.5px solid lightGray', mb: 5, mx: 6 }}
      />

      <Box sx={{ px: 4 }}>
        <FullCalendar
          // plugins={[dayGridPlugin, interactionPlugin]}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          // events={calendarInfo}
          locales={allLocales}
          locale="ko"
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    height: 100%;
  `
})
