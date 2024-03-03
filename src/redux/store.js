import { configureStore,createSlice } from '@reduxjs/toolkit';
import { adsReducer } from './slices/ads';

const store = configureStore({
    reducer: {
        ads: adsReducer,
    }
})

export default store;