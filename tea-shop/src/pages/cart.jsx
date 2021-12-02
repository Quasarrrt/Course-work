import React from "react";
import Cart from "../components/Cart/Cart";

const CartPage = ({ cart, onCardDelete, changeQuantity }) => {
  return (
    <Cart
      cart={cart}
      onCardDelete={onCardDelete}
      changeQuantity={changeQuantity}
    />
  );
};

export default CartPage;
