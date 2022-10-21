import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
//#to utilize the state storeed in each slice
function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible); //' the state of ui slice, identified by the ui because we can only have one reducer.
    const cart = useSelector((state) => state.cart); //'the lastest cart
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: 'pending',
                    title: 'sending',
                    message: 'sending cart cart',
                }),
            );
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

            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'success',
                    message: 'cart sent',
                }),
            );
        };
        sendCartData().catch((err) => {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'error',
                    message: 'could not send cart data',
                }),
            );
        });
    }, [cart]); // 'hence whenever the cart content changers, it the function will be rerendered

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
