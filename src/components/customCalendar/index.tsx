import { Box } from '@mui/material'
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

export const CustomCalendar = () => {
  /** Property */
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([])

  const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD format

  const INITIAL_EVENTS: EventInput[] = [
    {
      id: new Date().toString(),
      title: 'Hi! dongdong',
      start: todayStr
    }
  ]

  /** Function */
  const handleEvents = useCallback((event: EventApi[]) => {
    setCurrentEvents(event)
    // console.log('event >> ', event)
  }, [])

  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    let title = prompt('hello world')?.trim()
    let calendarApi = selectInfo.view.calendar
    console.log('selectInfo >>> ', selectInfo)
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
    console.log(data)
  }, [])

  const [value, setValue] = useState(new Date())
  /** Render */
  return (
    <Box style={{ height: '100%' }}>
      <FullCalendar
        // plugins={[dayGridPlugin, interactionPlugin]}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        initialEvents={INITIAL_EVENTS}
        locales={allLocales}
        locale="ko"
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </Box>
  )
}
