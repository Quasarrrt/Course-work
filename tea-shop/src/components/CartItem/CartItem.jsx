import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ cart, onCardDelete, changeQuantity }) => {
  const handleClick = () => {
    onCardDelete(cart.id);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productContainer}>
          <img src={cart.url} alt={"фото чая"} className={styles.image} />
          <div className={styles.name}>{cart.name}</div>
        </div>
        <div className={styles.countContainer}>
          <button
            onClick={() => changeQuantity(cart, "increase")}
            className={styles.countButton}
          >
            +
          </button>
          <p>{cart.quantity >= 1 ? cart.quantity : 1}</p>
          <button
            onClick={() => changeQuantity(cart, "decrease")}
            className={styles.countButton}
          >
            -
          </button>
        </div>

        <div className={styles.price}>{cart.price * cart.quantity} ₽</div>
      </div>
      <button className={styles.button} onClick={handleClick}>
        Удалить продукт
      </button>
      <hr className={styles.line} />
    </>
  );
};

export default CartItem;
