import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ads: {
        items: [],
        status: 'loading',
    },
    categories: {
        items: [],
        status: 'loading',
    } 
}

const adsSlice = createSlice({
    name: 'ads',
    initialState,
    reducer: {},
})

export const adsReducer = adsSlice.reducer;