import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
//#to dispatch an action, need the action itself and dispatch function.
const CartButton = (props) => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(uiAction.toggle());
    };
    return (
        <button className={classes.button} onClick={toggleHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;