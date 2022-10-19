import { configureStore } from '@reduxjs/toolkit';
//# to generate store component with single reducer,
import uiSlice from './ui-slice';
import cartSlice from './cart-slice';



const store = configureStore({
    reducer:{
        ui: uiSlice.reducer, 
        cart:cartSlice.reducer
    }
})
export default store;