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

const reduceCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

//as the actual value you want to accesssrc/context/user.context.jsx
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  totalItemsInCart: 0,
  reduceItemFromCart: () => {},
  clearItemFromCart: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [total, setTotal] = useState(0);

  const reduceItemFromCart = (productToRemove) => {
    setCartItems(reduceCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    const newTotalItemsInCart = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalItemsInCart(newTotalItemsInCart);
  }, [cartItems]);
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalItemsInCart,
    reduceItemFromCart,
    clearItemFromCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
