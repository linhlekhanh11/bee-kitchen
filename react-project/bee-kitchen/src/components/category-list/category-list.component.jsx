import CategoryItem from "../category-item/category-item.component";

const CategoryList = ({ categories }) => {
  categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));
};

export default CategoryList;
