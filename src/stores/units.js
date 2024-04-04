import { createSlice } from '@reduxjs/toolkit'


export const units = createSlice({
    name: 'units',
    initialState: {
        value: true, // true = metric, false = imperial
    },
    reducers: {
        changeUnits: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { changeUnits } = units.actions

export default units.reducer