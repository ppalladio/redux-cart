import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch,useSelector } from 'react-redux';
//#to dispatch an action, need the action itself and dispatch function.
const CartButton = (props) => {
    const dispatch = useDispatch();
   const cartQuantity =  useSelector(state=>state.cart.totalQuantity)
    const toggleHandler = () => {
        dispatch(uiAction.toggle());
    };
    return (
        <button className={classes.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
