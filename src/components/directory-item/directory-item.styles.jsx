import styled from "styled-components";

export const backgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const StyledBody = styled.div`
  height: 100px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(99, 95, 95);
  background-color: rgb(255, 255, 255);
  opacity: 0.7;
  position: absolute;
  border-radius: 10px;
`;

export const StyledTitle = styled.h2`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #131313;
`;

export const StyledShopNow = styled.p`
  font-weight: lighter;
  font-size: 16px;
`;




export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 540px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(99, 95, 95);
  margin: 0 7.5px 15px;
  overflow: hidden;
  border-radius: 15px;

  &:hover {
    cursor: pointer;

    & ${backgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${StyledBody} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

`;

