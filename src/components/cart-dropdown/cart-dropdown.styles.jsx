import styled from "styled-components";
import Button from "../button/button.component";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 130px;
  right: 40px;
  z-index: 5;
  ${BaseButton},
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
    height: 50px;
  }
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CheckoutButton = styled(Button)`
  margin-top: auto;
  height: 50px;
`;

export const EmptyCart = styled.span`
  font-size: 18px;
  margin: 80px auto;
`;
