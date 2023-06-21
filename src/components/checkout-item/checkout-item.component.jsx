import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { styled } from "styled-components";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, reduceItemFromCart } =
    useContext(CartContext);

  const handleClearItem = () => {
    clearItemFromCart(cartItem);
    alert("Succesfully removed item from the cart");
  };
  const handleAddItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => reduceItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <StyledCheckoutImage src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <StyledDescription> {name}</StyledDescription>
      <StyledQuantity>
        <StyledArrow onClick={handleRemoveItem}> &#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={handleAddItem}>&#10095;</StyledArrow>
      </StyledQuantity>
      <StyledDescription>{price}</StyledDescription>
      <RemoveButton onClick={handleClearItem}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const StyledCheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledDescription = styled.span`
  width: 23%;
`;
const StyledQuantity = styled.span`
  width: 23%;
  padding-left: 20px;
  display: flex;
`;
const StyledArrow = styled.div`
  cursor: pointer;
`;

const StyledValue = styled.span`
  margin: 0 10px;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
