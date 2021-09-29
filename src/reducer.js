export const reducer = (state, action) => {
  let total = 0;
  if (action.type === "FIRST_UPDATE") {
    const newCart = action.payload;

    newCart.map((item) => {
      total += item.price * item.amount;
    });

    return {
      ...state,
      cart: newCart,
      total: total,
    };
  }

  if (action.type === "INCREASE") {
    const id = action.payload;

    const newwCart = state.cart.map((p) =>
      p.id === id ? { ...p, amount: p.amount++ } : p
    );

    console.log(id, newwCart);
    newwCart.map((item) => {
      return (total += item.price * item.amount);
    });
    return {
      ...state,
      cart: newwCart,
      total: Math.round((total + Number.EPSILON) * 100) / 100,
    };
  }
  if (action.type === "DECREASE") {
    const id = action.payload;

    const newwCart = state.cart.map((p) =>
      p.id === id ? { ...p, amount: p.amount-- } : p
    );

    console.log(id, newwCart);
    newwCart.map((item) => {
      return (total += item.price * item.amount);
    });
    return {
      ...state,
      cart: newwCart,
      total: Math.round((total + Number.EPSILON) * 100) / 100,
    };
  }
  if (action.type === "REMOVE") {
    const id = action.payload;

    const newwCart = state.cart.filter((item) => item.id !== id);
    newwCart.map((item) => {
      return (total += item.price * item.amount);
    });
    return {
      ...state,
      cart: newwCart,
      total: Math.round((total + Number.EPSILON) * 100) / 100,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
      total: 0,
    };
  }
  throw new Error("no matching action type");
};
