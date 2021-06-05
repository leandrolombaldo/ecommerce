import React ,{useState,createContext}from "react";
 
const initialState = {
   cart: [],
  //  increment: (item)=> {},
  //  decrement: (id)=> {}
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
          ? {...item, qty: item.qty + 1}
          : item,
        ),
      ]
      :[...prev, {...product, qty: 1}];
    })
  }

  function removeFromCart(product) {
    setCart((prev) => [
      ...prev.filter((item) => item.id !== product.id),
    ]);
  }

  function changeQty(product, qty) {
    if(qty === 0) return removeFromCart(product);

    setCart((prev) => [
      ...prev.map((item) =>
      item.id === product.id ? {...item, qty } : item,
      ),
    ]);
  }
  
  function total(cart) {
    return cart.reduce(function (acc, item) {
      acc += item.price * item.qty;
      return acc;
    }, 0);
  }

  function details(product) {
    setCart((prev) => {
      const existing = cart.find(
        (item) => item.id === product.id
      );

      return existing
      ? [
        ...cart.map((item) =>
        item.id === product.id
          ? {...item, item}
          : item,
        ),
      ]
      :[...prev, {...product, product}];
    })
  }
  

  return (
    <CounterContext.Provider value={{ cart, addToCart, removeFromCart, changeQty, total, details }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
