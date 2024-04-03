import { createSlice } from '@reduxjs/toolkit'


export const location = createSlice({
    name: 'location',
    initialState: {
        value: {},
    },
    reducers: {
        updateLocation: (state, action) => {
            state.value = action.payload;
        }
    },
})

export const { updateLocation } = location.actions

export default location.reducer