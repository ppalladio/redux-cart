import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
//#to utilize the state storeed in each slice
function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible); //' the state of ui slice, identified by the ui because we can only have one reducer.
    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
