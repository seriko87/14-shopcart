import React, { useState, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const defaultState = {
  cart: [],
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [totalItem, setTotalItem] = useState(state.cart.length);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "FIRST_UPDATE", payload: cart });
    setLoading(false);
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setTotalItem(state.cart.length);
  }, [state.cart.length]);
  // use reducer

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const clearCart = (id) => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <AppContext.Provider
      value={{
        state,
        increase,
        decrease,
        remove,
        totalItem,
        clearCart,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
