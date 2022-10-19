import { configureStore } from '@reduxjs/toolkit';
import { uiAction } from './ui-slice';
import uiSlice from './ui-slice';




const store = configureStore({
    reducer:{
        ui: uiSlice.reducer, 
    }
})
export default store;