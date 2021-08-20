import { useState, createContext, ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface InitialState {
  cart: Array<PropsProducts>;
  addToCart: (item: PropsProducts) => void;
  removeFromCart: (id: PropsProducts) => void;
  changeQuantity: (product: PropsProducts, quantity: number) => void;
  total: (cart: Array<PropsProducts>) => void;
}

const cartInitialState: InitialState = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
  total: () => {},
}

interface PropsProducts {
  id: number;
  quantity: number;
  price: number;
  image: string;
  name: string;
  color: string;

}

const CounterContext = createContext<InitialState>(cartInitialState);

function CounterProvider({ children }: ProviderProps) {

  const [cart, setCart] = useState<Array<PropsProducts>>([]);

  const addToCart = (product: PropsProducts) => {
    setCart((prev) => {
      const existing = cart.find(item => item.id === product.id);

      return existing
        ? [
            ...cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          ]
        : [...prev, { ...product, quantity: 1 }];
    });
  }

  const removeFromCart = (product: PropsProducts) => {
    setCart((prev) => [...prev.filter(item => item.id !== product.id)]);
  }

  const changeQuantity = (product: PropsProducts , quantity: number) => {
    quantity ? 1 : removeFromCart(product);

    setCart((prev) => [
      ...prev.map((item) =>
        item.id === product.id ? { ...item, quantity } : item
      ),
    ]);
  }

  const total = (cart: PropsProducts[]) => {
    return cart.reduce((acc: number, item: any) => {
      acc += item.price * item.quantity;
      return acc;
    }, 0);
  }

  return (
    <CounterContext.Provider
      value={{ cart, addToCart, removeFromCart, changeQuantity, total }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };
