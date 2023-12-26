import '../product-card/product-card.styles.scss';
import Button from '../buttons/button.component';

const ProductCard =({product}) =>{
    const {name ,price , imageUrl} = product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'> {name} </span>
                <span className='price'> {price} </span>
             </div>
             <Button buttonType='inverted'>Add to card</Button>
        </div>
    );
};

export default ProductCard;