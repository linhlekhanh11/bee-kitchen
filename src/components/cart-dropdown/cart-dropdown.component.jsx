import { useContext } from "react";

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.jsx";

import { useNavigate } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  CheckoutButton,
  EmptyCart,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyCart> Your cart is empty </EmptyCart>
        )}
      </CartItems>
      <CheckoutButton onClick={goToCheckoutHandler}> GO TO CHECKOUT</CheckoutButton>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
