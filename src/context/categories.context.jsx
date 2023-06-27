import { useState, createContext, useEffect } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

//as the actual value you want to accesssrc/context/user.context.jsx
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
    };
    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
