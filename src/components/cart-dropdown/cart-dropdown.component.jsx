import { useContext } from "react";

import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.jsx";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItems,
  CheckoutButton,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <CheckoutButton onClick={goToCheckoutHandler}>
        {" "}
        GO TO CHECKOUT
      </CheckoutButton>
    </CartDropdownContainer>
  );
};
export default CartDropdown;
