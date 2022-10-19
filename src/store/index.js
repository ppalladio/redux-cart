import { configureStore } from '@reduxjs/toolkit';
//# to generate store component with single reducer,
import uiSlice from './ui-slice';




const store = configureStore({
    reducer:{
        ui: uiSlice.reducer, 
    }
})
export default store;