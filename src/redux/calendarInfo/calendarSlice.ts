import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

import { EventApi } from '@fullcalendar/core'
import { CalendarInfoType } from '../../types'

interface CalendarInfoInterface {
  info: CalendarInfoType[]
}

const initialState: CalendarInfoInterface = {
  info: []
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addInfo: (
      state,
      { payload }: { payload: CalendarInfoInterface; type: string }
    ) => {
      if (payload) {
        console.log('payload', payload)
        return produce(payload, (draft) => {
          if (draft) {
            console.log('draft > ', draft)
            // state.info.push({ ...payload })
          }
        })
      }
    }
  }
})

export const { addInfo } = calendarSlice.actions

export default calendarSlice.reducer
