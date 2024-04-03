import { configureStore } from '@reduxjs/toolkit'

// Reducers
import locationReducer from './stores/location'
import weatherReducer from './stores/weather'

export default configureStore({
  reducer: {
    location:locationReducer,
    weather:weatherReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})