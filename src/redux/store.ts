import { configureStore } from '@reduxjs/toolkit'
import addCalendarReducer from './calendarInfo/calendarSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, addCalendarReducer)

export const store = configureStore({
  reducer: {
    addCalendar: persistedReducer
  }
})
//
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)
