import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const cartItem = useSelector((state) => state.cart.items);
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItem.map((item) => (
                    <CartItem
                        item={{
                            title: item.itemName,
                            quantity: item.ItemQuantity,
                            total: item.itemTotal,
                            price: item.itemPrice,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
