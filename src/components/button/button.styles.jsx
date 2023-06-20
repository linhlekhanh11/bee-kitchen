import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 40%;
  width: auto;
  height: 12%;
  letter-spacing: 10%;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 95%;
  background-color: rgb(72, 72, 72);
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: rgb(121, 114, 114);
    border: 1px solid rgb(121, 114, 114);
  }
`

export const GoogleSignInButton = styled(BaseButton)`
background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #c4d8f7;
      color: rgb(121, 114, 114);
      border: none;
    }
`

export const InvertedButton = styled(BaseButton)`
        background-color: white;
    color: rgb(121, 114, 114);
    border: 1px solid rgb(121, 114, 114);

    &:hover {
      background-color: rgb(121, 114, 114);
      color: white;
      border: none;
    }
`

