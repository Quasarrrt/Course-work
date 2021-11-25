import React from 'react';
import styles from './Cart.module.css'
import CartItem from "../CartItem/CartItem";

const Cart = ({cart,  onCardDelete}) => {
    const getPrice=()=>{
        let sum=0;
        cart.forEach((item)=>{
            sum+=item.price;
        })
        return sum;
    }

    return (
        <main className={styles.cart}>
            <div className={styles.menu}>
                <p>Продукт</p>
                <p>Количество</p>
                <p>Цена</p>
            </div>
            <hr className={styles.line}/>
            {cart.map((item)=>{
                return(
                    <>
                        <CartItem cart={item} onCardDelete={onCardDelete}/>
                        <hr className={styles.line}/>
                    </>
                    )


            }

            )}

            <hr className={styles.line}/>
            <p className={styles.price}>Итоговая цена: {getPrice()} ₽
            </p>
        </main>

    );
};

export default Cart;