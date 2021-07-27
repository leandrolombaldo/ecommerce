import { useContext } from 'react'

import {CounterContext} from '../store/cart';

export const useCart = () => {
const context = useContext(CounterContext);
return context;
}

