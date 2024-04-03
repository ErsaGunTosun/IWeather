import { createSlice } from '@reduxjs/toolkit'


export const weather = createSlice({
    name: 'weather',
    initialState: {
        current:{},
        dates: {},
        data: {}
    },
    reducers: {
        updateWeather: (state, action) => {
            state.dates = action.payload.dates
            state.data = action.payload.data
        },
        updateCurrentWeather(state, action){
            state.current = action.payload;
        }
    },
})

export const { updateWeather,updateCurrentWeather } = weather.actions

export default weather.reducer