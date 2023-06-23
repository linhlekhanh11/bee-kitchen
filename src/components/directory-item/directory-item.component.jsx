import { DirectoryItemContainer, BackgroundImage, StyledBody, StyledShopNow, StyledTitle } from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
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
