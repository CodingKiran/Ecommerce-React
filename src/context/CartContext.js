import { createContext, useReducer} from "react";
import { CartReducer, initialState} from "./Reducers";
export const CartContext = createContext();

export const CartState = ({ children }) => {
 const [state, dispatch] = useReducer(CartReducer, initialState)
 
  return <CartContext.Provider value={{state, dispatch, CartReducer}}>{children}</CartContext.Provider>;
};

