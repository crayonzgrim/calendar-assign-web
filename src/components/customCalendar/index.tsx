import { Box, TextField, styled, css, Typography, Divider } from '@mui/material'
import { useCallback, useState } from 'react'
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

type CustomCalendarProps = {
  //
}

export const CustomCalendar = styled((props: CustomCalendarProps) => {
  /** Property */
  const { ...others } = props

  const [data, setData] = useState<EventInput[]>([
    {
      id: crypto.randomUUID(),
      title: 'Title-1',
      start: '2023-01-12',
      end: '2023-01-17',
      color: '#555',
      memo: 'This is a memo'
    },
    {
      id: crypto.randomUUID(),
      title: 'Title-2',
      start: '2023-01-14',
      end: '2023-01-23',
      color: '#013220',
      memo: 'This is a memo'
    }
  ])

  const [toValue, setToValue] = useState(
    new Date().toISOString().replace(/T.*$/, '')
  )
  const [fromValue, setFromValue] = useState(
    new Date().toISOString().replace(/T.*$/, '')
  )

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])

  const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD format

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
  const handleEvents = useCallback((event: EventApi[]) => {
    setCurrentEvents(event)
    // console.log('event >> ', event)
  }, [])

  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt('hello world')?.trim()
    let calendarApi = selectInfo.view.calendar
    // console.log('selectInfo >>> ', selectInfo)
    // console.log('calendarApi >>> ', calendarApi)
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: new Date().toString(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }, [])

  const handleEventClick = useCallback((data: EventClickArg) => {
    // console.log(data)
  }, [])

  /** Render */
  return (
    <Box {...others}>
      <DateForm data={data} toValue={toValue} fromValue={fromValue} />
      <FullCalendar
        // plugins={[dayGridPlugin, interactionPlugin]}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        initialEvents={data}
        // initialEvents={INITIAL_EVENTS}
        locales={allLocales}
        locale="ko"
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </Box>
  )
})(({ theme }) => {
  return css`
    height: 100%;
  `
})
