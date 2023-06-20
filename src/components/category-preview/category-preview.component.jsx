import { styled } from "styled-components";
import { NavLinks } from "../routes/navigation/navigation.styles";
import ProductCard from "../product-card/product-card.component";
// import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <NavLinks to={title}>
        <h2>
          <StyledTitle>{title.toUpperCase()}</StyledTitle>
        </h2>
      </NavLinks>
      <StyledPreview>
        {products
          .filter((_, indx) => indx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </StyledPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;

const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const StyledPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

const StyledTitle = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

