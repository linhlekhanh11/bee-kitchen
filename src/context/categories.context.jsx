import { createContext, useEffect, useReducer } from "react";
import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

//as the actual value you want to accesssrc/context/user.context.jsx
export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_TYPE = {
  SET_CURRENT_CATEGORIES: "SET_CURRENT_CATEGORIES",
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_TYPE.SET_CURRENT_CATEGORIES:
      return {
        ...state,
        categoriesMap: payload,
      };
    case "increment":
      return {
        value: state.value + 1,
      };
    default:
      throw new Error(`Unhandled type ${type} in categoriesReducer`);
  }
};
const INITIAL_STATE = {
  categoriesMap: {},
};
export const CategoriesProvider = ({ children }) => {
  const [{categoriesMap}, dispatch ] = useReducer(categoriesReducer, INITIAL_STATE)
  const setCategoriesMap = (user) => {
    dispatch({ type: CATEGORIES_TYPE.SET_CURRENT_CATEGORIES, payload: user })
  }
  // console.log(categoriesMap)
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
