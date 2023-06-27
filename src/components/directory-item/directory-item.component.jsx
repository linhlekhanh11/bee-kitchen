import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  StyledBody,
  StyledShopNow,
  StyledTitle,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  let navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <StyledBody>
        <StyledTitle>{title}</StyledTitle>
        <StyledShopNow>Shop Now</StyledShopNow>
      </StyledBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
