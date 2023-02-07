import React, { createContext, useCallback, useEffect, useState } from 'react'
import produce from 'immer'
import { CalendarContextType, CalendarInfoType } from '../types'

export const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType
)

export const CalendarProvider: React.FC<React.ReactNode | any> = ({
  children
}) => {
  const [calendarInfo, setCalendarInfo] = useState<CalendarInfoType[]>([])

  /** 저장 */
  const saveCalendarInfo = useCallback(
    (info: CalendarInfoType) => {
      if (info) {
        console.log('SAVE FUNC >> ', info)
        setCalendarInfo([...calendarInfo, { ...info }])
      }
    },
    [calendarInfo]
  )

  /** 수정 */
  const updateCalendarInfo = useCallback(
    (id: string) => {
      calendarInfo.filter((info: CalendarInfoType) => {
        if (info.id === id) {
          console.log('updateCalendar >> ', info)
        }
      })
    },
    [calendarInfo]
  )

  const removeCalendarInfo = useCallback((id: string) => {
    //   localStorage.removeItem('calendar-info')
  }, [])

  useEffect(() => {
    const data = localStorage.getItem('calendar-info')
    if (data) {
      setCalendarInfo((prev) => [...prev, ...JSON.parse(data)])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('calendar-info', JSON.stringify(calendarInfo))
  })

  // useEffect(() => {
  //   localStorage.removeItem('calendar-info')
  // })

  return (
    <CalendarContext.Provider
      value={{
        calendarInfo,
        saveCalendarInfo,
        updateCalendarInfo,
        removeCalendarInfo
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}
