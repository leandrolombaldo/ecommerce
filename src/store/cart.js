import {useState,createContext}from "react";
 
const initialState = {
   cart: []
}
const CounterContext = createContext(initialState);

function CounterProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prev) => {
      const existing = cart.find(
        (item) => item.id === product.id
      );

      return existing
      ? [
        ...cart.map((item) =>
        item.id === product.id
          ? {...item, quantity: item.quantity + 1}
          : item,
        ),
      ]
      :[...prev, {...product, quantity: 1}];
    })
  }

  function removeFromCart(product) {
    setCart((prev) => [
      ...prev.filter((item) => item.id !== product.id),
    ]);
  }

  function changeQuantity(product, quantity) {
    if(quantity === 0) return removeFromCart(product);

    setCart((prev) => [
      ...prev.map((item) =>
      item.id === product.id ? {...item, quantity } : item,
      ),
    ]);
  }
  
  function total(cart) {
    return cart.reduce(function (acc, item) {
      acc += item.price * item.quantity;
      return acc;
    }, 0);
  }

  

  return (
  <CounterContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity, total }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
