import React, { createContext, useCallback, useEffect, useState } from 'react'
import produce from 'immer'
import axios from 'axios'

import { CalendarContextType, CalendarInfoType } from '../types'
import { BASE_URL } from '../api'

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
        setCalendarInfo([...calendarInfo, { ...info }])
      }
    },
    [calendarInfo]
  )

  /** 수정 */
  const updateCalendarInfo = useCallback(
    (id: string) => {
      calendarInfo.filter((info: CalendarInfoType) => {
        // if (info.id === id) {
        //   console.log('updateCalendar >> ', info)
        // }
      })
    },
    [calendarInfo]
  )

  const removeCalendarInfo = useCallback((id: string) => {
    //   localStorage.removeItem('calendar-info')
  }, [])

  useEffect(() => {
    // const data = localStorage.getItem('calendar-info')
    // if (data) {
    //   setCalendarInfo((prev) => [...prev, ...JSON.parse(data)])
    // }
  }, [])

  useEffect(() => {
    // localStorage.setItem('calendar-info', JSON.stringify(calendarInfo))
  })

  useEffect(() => {
    // localStorage.removeItem('calendar-info')
  }, [])

  const getAllCalendarInfo = async () => {
    const data = await axios.get(BASE_URL).then((res) => res.data.calendarInfo)

    if (data) {
      setCalendarInfo(data)
    }
  }

  useEffect(() => {
    getAllCalendarInfo()
  }, [])

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
