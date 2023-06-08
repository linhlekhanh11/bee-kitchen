import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  //return new array with modified cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//as the actual value you want to accesssrc/context/user.context.jsx
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  totalItemsInCart: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    setTotalItemsInCart(totalItemsInCart + 1);
  };
  useEffect(() => {
    const newTotalItemsInCart = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalItemsInCart(newTotalItemsInCart);
  }, [cartItems]);
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalItemsInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
