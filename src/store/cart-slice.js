import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
const cartSlice = createSlice({
    name: 'cart',
    initialState: { items: [], totalQuantity: 0 },
    reducers: {
        addItemToCart(state, action) {
            const item = action.payload;
            const existingItem = state.items.find((i) => i.id === item.id);
            state.totalQuantity++;
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

//: [Thunk function], delay the action until later,in this case, an action creator function that does not return the action itself but another function which eventually returns the action
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'sending',
                message: 'sending cart cart',
            }),
        );

        const sendRequest = async () => {
            const res = await fetch(
                'https://react-c749e-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    content: JSON.stringify(cart),
                },
            );

            if (!res.ok) {
                throw new Error('Could not send cart data');
            }
        };
        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'success',
                    message: 'cart sent',
                }),
            );
        } catch (err) {
            sendCartData().catch((err) => {
                sendCartData().catch((err) => {
                    dispatch(
                        uiActions.showNotification({
                            status: 'error',
                            title: 'error',
                            message: 'could not send cart data',
                        }),
                    );
                });
            });
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
