import { configureStore } from '@reduxjs/toolkit'
import addCalendarReducer from './calendarInfo/calendarSlice'

const store = configureStore({
  reducer: {
    addCalendar: addCalendarReducer
  }
})
//
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
