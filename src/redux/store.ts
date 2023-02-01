import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import addCalendarReducer from './calendarInfo/calendarSlice'

const persistConfig = {
  key: 'root',
  storage
  // whitelist: ['calendar'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, addCalendarReducer)

export const store = configureStore({
  reducer: {
    addCalendar: persistedReducer
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({ serializableCheck: false })
  }
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
