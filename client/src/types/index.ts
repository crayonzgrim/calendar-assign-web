import { EventApi } from '@fullcalendar/core'

export type CalendarInfoType = {
  _id?: string
  title: string
  start: string
  end: string
  display: string
  backgroundColor: string
}

export type CalendarContextType = {
  calendarInfo: CalendarInfoType[]
  saveCalendarInfo: (info: CalendarInfoType) => void
  updateCalendarInfo: (id: string) => void
  removeCalendarInfo: (id: string) => void
}
