import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'; //#to utilize the state stored in each slice
import { sendCartData } from './store/cart-actions';
import { fetchCartData } from './store/cart-actions';

import Notification from './components/UI/Notification';
let isInit = true; //. to prevent the useEffect from running at the beginning and sending empty data
function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible); //' the state of ui slice, identified by the ui because we can only have one reducer.
    const cart = useSelector((state) => state.cart); //'the lastest cart
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.ui.notification);
    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInit) {
            isInit = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]); // 'hence whenever the cart content changers, it the function will be rerendered, [dispatch] will be never change but still considered as a good practice to include it

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
