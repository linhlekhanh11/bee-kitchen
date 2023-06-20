import { styled } from "styled-components";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalItemsInCart } =
    useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <StyledShoppingIcon onClick={toggleIsCartOpen} />
      <ItemCount>{totalItemsInCart}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const StyledShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;