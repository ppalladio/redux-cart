import { createSlice } from '@reduxjs/toolkit';
const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0, changed: false }, //'changed: dont change this is we replaced the cart, changed if we add/remove items
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            state.totalQuantity++;
            state.changed= true
            if (!existingItem) {
                state.items.push({
                    id: item.id,
                    itemPrice: item.price,
                    ItemQuantity: 1,
                    itemTotal: item.price,
                    itemName: item.title,
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
            state.totalQuantity--;
            state.changed= true
            if (existingItem === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.ItemQuantity--;
                existingItem.itemtotal =
                    existingItem.itemTotal - existingItem.itemPrice;
            }
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
