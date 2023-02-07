import { useCallback, useContext, useEffect, useState } from 'react'
import { Box, TextField, styled, css, Typography, Divider } from '@mui/material'

import FullCalendar from '@fullcalendar/react'
import { DateSelectArg, EventClickArg } from '@fullcalendar/core'
import allLocales from '@fullcalendar/core/locales-all'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

import { DateForm } from '../dateForm'
import { CalendarContextType, CalendarInfoType } from '../../types'
import { CalendarContext } from '../../context'

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
    id: crypto.randomUUID(),
    title: '',
    start: '',
    end: '',
    display: '',
    backgroundColor: ''
  })

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

  const handleEventClick = useCallback((data: EventClickArg) => {
    console.log('data > ', data)
    // calendarInfo.map((item) => {
    //   if (item.id === data.event.id) {
    //     console.log(item)
    //     //   alert(item.memo)
    //   }
    //
    //   return undefined
    // })
  }, [])

  useEffect(() => {
    console.log(calendarInfo)
  }, [calendarInfo])
  /** Render */
  return (
    <Box {...others}>
      {/* {calendarInfo.map((info, index) => { */}
      {/*   return ( */}
      {/*     <DateForm */}
      {/*       key={index} */}
      {/*       info={info} */}
      {/*       formInfo={formInfo} */}
      {/*       setFormInfo={setFormInfo} */}
      {/*       handleDateSelect={handleDateSelect} */}
      {/*     /> */}
      {/*   ) */}
      {/* })} */}
      <DateForm
        formInfo={formInfo}
        setFormInfo={setFormInfo}
        handleDateSelect={handleDateSelect}
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
          events={calendarInfo}
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
