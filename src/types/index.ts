import { EventApi } from '@fullcalendar/core'

export type CalendarInfoType = Partial<EventApi>

export type CalendarContextType = {
  calendarInfo: CalendarInfoType[]
  saveCalendarInfo: (todo: CalendarInfoType) => void
  updateCalendarInfo: (
    id: string,
    title: string,
    startStr: string,
    endStr: string,
    display: string,
    backgroundColor: string
  ) => void
}
