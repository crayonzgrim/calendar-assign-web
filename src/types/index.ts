import { EventApi } from '@fullcalendar/core'

export type CalendarInfoType = Pick<
  EventApi,
  'id' | 'title' | 'start' | 'end' | 'url' | 'backgroundColor'
>
