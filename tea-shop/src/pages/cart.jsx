import React from "react";
import Cart from "../components/Cart/Cart";

const CartPage = ({ cart, onCardDelete }) => {
  return <Cart cart={cart} onCardDelete={onCardDelete} />;
};

export default CartPage;
