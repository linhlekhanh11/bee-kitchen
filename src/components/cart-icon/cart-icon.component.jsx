import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItemsInCart } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{totalItemsInCart}</span>
    </div>
  );
};
export default CartIcon;
