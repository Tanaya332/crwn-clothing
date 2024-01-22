import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';
import { useSelector } from 'react-redux';

import Button from '../buttons/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer , EmptyMessage , CartItems } from './cart-dropdown.styles'; 
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  
  const navigate= useNavigate();

  const goToNavigationHandler= () =>
   {navigate('/checkout')}

  return (
    <CartDropdownContainer>
     <CartItems>
        {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
            ) :(
              <EmptyMessage>Your cart is empty</EmptyMessage>
            )
        }
      </CartItems>
      <Button onClick={goToNavigationHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
  );
};

export default CartDropdown;


