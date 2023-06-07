import { useState, createContext } from "react";
import PRODUCTS from "../shop-data.json";

//as the actual value you want to accesssrc/context/user.context.jsx
export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
