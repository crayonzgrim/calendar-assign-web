import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { EventInput } from '@fullcalendar/core'

const initialState: EventInput[] = [
  {
    id: crypto.randomUUID(),
    title: '',
    start: new Date().toISOString().replace(/T.*$/, ''),
    end: new Date().toISOString().replace(/T.*$/, ''),
    memo: '',
    color: '#000'
  }
]

export const calendarSlice = createSlice({
  name: 'calendarInfo',
  initialState,
  reducers: {
    addCalendarData: (state, action: PayloadAction<EventInput[]>) => {
      if (action.payload) {
        state.push(action.payload)
      }
    }
  }
})

export const { addCalendarData } = calendarSlice.actions

export default calendarSlice.reducer
