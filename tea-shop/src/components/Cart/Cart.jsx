import React, { useState } from "react";
import styles from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, onCardDelete }) => {
  const [quantity, setQuantity] = useState(cart);

  const changeQuantity = (tea, action) => {
    if (action === "increase") {
      const newArray = quantity.map((item) =>
        item.id === tea.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setQuantity([...newArray]);
    } else if (action === "decrease") {
      const newArray = quantity.map((item) =>
        item.id === tea.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setQuantity([...newArray]);
    }
  };
  const getPrice = () => {
    let sum = 0;
    quantity.forEach((item) => {
      sum += item.price * item.quantity;
    });
    return sum;
  };

  return (
    <main className={styles.cart}>
      <div className={styles.menu}>
        <p>Продукт</p>
        <p>Количество</p>
        <p>Цена</p>
      </div>
      <hr className={styles.line} />
      {quantity.map((item) => {
        return (
          <CartItem
            cart={item}
            onCardDelete={onCardDelete}
            changeQuantity={changeQuantity}
            key={item.id}
          />
        );
      })}

      <p className={styles.price}>Итоговая цена: {getPrice()} ₽</p>
    </main>
  );
};

export default Cart;
