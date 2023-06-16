import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";
import CategoriesPreview from "../components/routes/categories-preview/categories-preview.component";

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
   <Routes>
    <Route index element= {<CategoriesPreview />}/>
   </Routes>
  );
};

export default Shop;
