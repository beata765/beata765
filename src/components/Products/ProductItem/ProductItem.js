import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';



const ProductItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    return <li className={classes.product}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.facts}>{props.facts}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <ProductItemForm />
        <div>

        </div>
        </li>
    
};

export default ProductItem;