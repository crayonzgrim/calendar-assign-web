import React, { createContext, useEffect, useState } from 'react'
import { CalendarContextType, CalendarInfoType } from '../types'

export const CalendarContext = createContext<CalendarContextType | null>(null)

export const CalendarProvider: React.FC<React.ReactNode | any> = ({
  children
}) => {
  const [calendarInfo, setCalendarInfo] = useState<CalendarInfoType[]>([])

  const saveCalendarInfo = (info: CalendarInfoType) => {
    // const newInfo: CalendarInfoType = {
    //   id: '',
    //   title: '',
    //   startStr: '',
    //   endStr: '',
    //   display: '',
    //   backgroundColor: ''
    // }
    console.log('SAVE FUNC >> ', info)

    setCalendarInfo([...calendarInfo, info])
  }

  const updateCalendarInfo = (id: string | undefined) => {
    calendarInfo.filter((info: CalendarInfoType) => {
      if (info.id === id) {
        console.log('updateCalendar >> ', info)
      }
    })
  }

  useEffect(() => {
    const data = localStorage.getItem('calendar-info')
    if (data) {
      setCalendarInfo((prev) => ({
        ...prev,
        ...JSON.parse(data)
      }))
    }
  }, [])

  useEffect(() => {
    if (calendarInfo.length > 0) {
      localStorage.setItem('calendar-info', JSON.stringify(calendarInfo))
    }
  })

  return (
    <CalendarContext.Provider
      value={{ calendarInfo, saveCalendarInfo, updateCalendarInfo }}
    >
      {children}
    </CalendarContext.Provider>
  )
}
