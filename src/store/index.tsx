import { ReactNode } from "react";
import { CounterProvider } from "./cart";

interface ProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <CounterProvider>{children}</CounterProvider>
);

export default Provider;
