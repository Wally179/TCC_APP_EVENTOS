import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState();
  const [IDforne, setIdForne] = useState("");
  useEffect(() => {
    let value = 0;
    cart.map((data) => {
      value =
        value + data.valor_produto; /*{+((value + data.valor_produto)*0.01)}*/
    });
    setTotalValue(value.toFixed(2));
  }, [cart]);
  function remove(index) {
    console.log(index);
    let newCart = cart.filter((data, index) => index !== index);
    setCart([...newCart]);
  }
  function IDarmazenar(IDforn) {
    setIdForne(IDforn);
  }
  function add(data) {
    const newCart = cart;
    newCart.push(data);
    setCart([...newCart]);
  }

  const store = {
    add,
    cart,
    totalValue,
    remove,
    IDarmazenar,
    IDforne,
  };
  return <CartContext.Provider value={store}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  const { cart, add, totalValue, remove, IDarmazenar, IDforne } = context;

  return {
    cart,
    add,
    totalValue,
    remove,
    IDarmazenar,
    IDforne,
  };
}
