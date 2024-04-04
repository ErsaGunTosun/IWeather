import { configureStore } from '@reduxjs/toolkit'

// Reducers
import locationReducer from './stores/location'
import weatherReducer from './stores/weather'
import unitsReducer from './stores/units'

export default configureStore({
  reducer: {
    location:locationReducer,
    weather:weatherReducer,
    units:unitsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})