import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
//#to utilize the state storeed in each slice
function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible); //' the state of ui slice, identified by the ui because we can only have one reducer.
    const cart = useSelector((state) => state.cart); //'the lastest cart

    useEffect(() => {
        fetch('https://react-c749e-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            content: JSON.stringify(cart),
        });

    }, [cart]);// 'hence whenever the cart content changers, it the function will be rerendered

    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
