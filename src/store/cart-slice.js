import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find((i) =>i.id=== item.id );
            state.totalQuantity++
            if (!existingItem) {
                state.items.concat({
                    id: item.id,
                    itemName: item.name,
                    itemPrice: item.price,
                    ItemQuantity: 1,
                    itemTotal: item.total,
                });
            } else {
                existingItem.itemQuantity++;
                existingItem.itemTotal =
                    existingItem.itemTotal + existingItem.itemPrice;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((i) => i.id === id);
            state.totalQuantity--
            if (existingItem === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.ItemQuantity--;
                existingItem.itemtotal =
                    existingItem.itemTotal - existingItem.price;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
