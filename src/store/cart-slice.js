import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find((i) => item.id === i.id);
            if (!existingItem) {
                state.items.concat({
                    itemId: item.id,
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
        removeItemFromCart(state, action) {},
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
