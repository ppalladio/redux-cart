import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


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
        } catch (error) {
                    dispatch(
                        uiActions.showNotification({
                            status: 'error',
                            title: 'error',
                            message: 'could not send cart data',
                        }),
                    );
        }
    };
};

export const fetchCartData = ()=>{
    return async dispatch => {
        const fetchData = async ()=>{
            const res = await fetch('https://react-c749e-default-rtdb.firebaseio.com/cat.json')

            if (!res.ok) {
                throw new Error('Could not get data');
            }
            const data =  await res.json()
        }
        try{
            const cartData = await fetchData()
        dispatch(cartActions.replaceCart(cartData))} catch (error){
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'error',
                    message: 'fetching cart data error',
                }),
            );

        }

        
    }
}