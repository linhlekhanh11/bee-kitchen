import { styled } from "styled-components";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <StyledImage src={imageUrl} alt={`${name}`} />
      <StyledImageDetails>
        <StyledName>{name}</StyledName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </StyledImageDetails>
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const StyledImage = styled.img`
  width: 33%;
`;

const StyledImageDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const StyledName = styled.span`
  font-size: 16px;
`;