// import {backgroundImage, StyledBody, StyledShopNow,StyledTitle} from "./directory-item.styles.jsx";

import { DirectoryItemContainer, StyledBody, StyledShopNow, StyledTitle } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <div
        className="background-image"
        imageUrl={imageUrl}

      />
      <StyledBody>
        <StyledTitle>{title}</StyledTitle>
        <StyledShopNow>Shop Now</StyledShopNow>
      </StyledBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
