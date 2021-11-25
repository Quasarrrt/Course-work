import React, {useState} from 'react';
import styles from './CartItem.module.css'


const CartItem = ({cart, onCardDelete}) => {
    const handleClick=()=>{
        onCardDelete(cart.id);
    }
    const [count, setCount]=useState(1)
    return (
        <>
            <div className={styles.container}>
                <div className={styles.productContainer}>
                    <img src={cart.url} alt={'фото чая'} className={styles.image}/>
                    < div className={styles.name}>{cart.name}</div>
                </div>
                <div className={styles.countContainer}>
                    <button onClick={()=>setCount(count+1)} className={styles.countButton}>+</button>
                    <p>{count>=1 ? count: 1}</p>
                    <button onClick={()=>setCount(count-1)} className={styles.countButton}>-</button>
                </div>

                <div className={styles.price}>{cart.price} ₽</div>
            </div>
            <button className={styles.button} onClick={handleClick}>Удалить продукт</button>
        </>


    );
};

export default CartItem;