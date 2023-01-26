import { Box, TextField, styled, css, Typography, Divider } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import {
  DateSelectArg,
  EventApi,
  EventClickArg,
  EventInput
} from '@fullcalendar/core'
import allLocales from '@fullcalendar/core/locales-all'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { DateForm } from '../dateForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type CustomCalendarProps = {
  //
}

export const CustomCalendar = styled((props: CustomCalendarProps) => {
  /** Property */
  const { ...others } = props

  const calendarInfo = useSelector((state: RootState) => state.addCalendar)

  const [config, setConfig] = useState<EventInput>({
    id: crypto.randomUUID(),
    title: '',
    start: '',
    end: '',
    memo: '',
    color: '#000'
  })

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])

  const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD format

  const [customTitle, setCustomTitle] = useState('')

  console.log('calendarInfo >> ', calendarInfo)
  // const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: '1',
  //   title: '1111',
  //     start: '2023-01-10',
  //     end: '2023-01-20',
  //     color: '#013220'
  //   },
  //   {
  //     id: '2',
  //     title: '2222',
  //     start: '2023-01-17',
  //     end: '2023-01-24',
  //     color: '#FF0000'
  //   }
  // ]

  /** Function */
  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      // let title = prompt('hello world')?.trim()
      const calendarApi = selectInfo.view.calendar
      // console.log(selectInfo)

      calendarApi.unselect()

      // calendarApi.addEvent(calendarInfo)
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

      // if (title) {
      //   calendarApi.addEvent({
      //     id: new Date().toString(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   })
      // }
    },
    [config]
  )

  // const handleEventClick = useCallback((data: EventClickArg) => {
  //   // console.log(data)
  // }, [])

  useEffect(() => {
    // const calendarApi = selectInfo.view.calendar
    //
    // if (calendarInfo) {
    //   calendarApi.addEvent(calendarInfo)
    // }
  }, [calendarInfo])

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
          plugins={[dayGridPlugin]}
          // plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable={true}
          editable={true}
          // initialEvents={calendarInfo}
          events={calendarInfo}
          // addEvent={(event, [calendarInfo])}
          // initialEvents={data}
          // initialEvents={INITIAL_EVENTS}
          locales={allLocales}
          locale="ko"
          // eventsSet={handleEvents}
          select={handleDateSelect}
          // eventClick={handleEventClick}
        />
      </Box>
    </Box>
  )
})(({ theme }) => {
  return css`
    height: 100%;
  `
})
