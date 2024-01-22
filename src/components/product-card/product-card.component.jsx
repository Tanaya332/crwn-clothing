import '../product-card/product-card.styles.scss';
// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import { useDispatch , useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button ,{BUTTON_TYPE_CLASSES} from '../buttons/button.component';
import { createAction } from '../../utils/reducer/reducer.utils';

const ProductCard =({product}) =>{
    // const {addItemToCart} = useContext(CartContext);

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addProductToCart = () => dispatch(addItemToCart(cartItems ,product))
    const {name ,price , imageUrl} = product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
             </div>
             <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
        </div>
    );
};

export default ProductCard;