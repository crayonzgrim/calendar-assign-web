import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'

import { CalendarInput } from '../../types'

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    calendarInfo: []
  },
  reducers: {
    addInfo: (state, { payload }: PayloadAction<CalendarInput | undefined>) => {
      if (payload) {
        console.log('payload', payload)
        return produce(payload, (draft) => {
          if (draft) {
            console.log('draft > ', draft)
            // state.calendarInfo.push(payload)
          }
        })
        // return state.calendarInfo.push({
        //   action.payload
        // })
      }
    }
  }
})

export const { addInfo } = calendarSlice.actions

export default calendarSlice.reducer
