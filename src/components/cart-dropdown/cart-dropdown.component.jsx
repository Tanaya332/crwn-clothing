import React, { createContext } from 'react';
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../buttons/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate= useNavigate();

  const goToNavigationHandler= () =>
   {navigate('/checkout')}

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
          }
      </div>
      <Button onClick={goToNavigationHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;


