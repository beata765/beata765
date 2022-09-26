import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon }>
            <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>4</span>

    </button>
};

export default HeaderCartButton;