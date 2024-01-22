import { Fragment , 
  // useContext
} from "react";
import { Outlet } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { useSelector , useDispatch} from "react-redux";
import './navigation.styles.jsx';
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector.js";

import { NavigationContainer , LogoContainer , NavLinks , NavLink } from "./navigation.styles"
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

const Navigation=() => {
  const dispatch = useDispatch();
  // const {currentUser} = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  // const {isCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  console.log(currentUser);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo" />
            </LogoContainer>
         <NavLinks>
            <NavLink to='/shop'>
                Shop
            </NavLink>
            {currentUser ? 
            ( <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
            ) :(
            <NavLink to='/auth'>
                SignIn
            </NavLink>)}

            <CartIcon></CartIcon>
         </NavLinks>
        {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  };
  
  export default Navigation;