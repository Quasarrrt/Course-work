import React from 'react';
import styles from './Card.module.css'

const Card = ({card, onCardClick}) => {

const handleClick=()=>{
    onCardClick(card);
}
    return (
        <div className={styles.card} >
            <img src={card.url} alt='фото чая' className={styles.img}/>
            <p className={styles.name}>{card.name}</p>
            <p className={styles.price}>{card.price} ₽</p>
            <button className={styles.addButton} onClick={handleClick}>Купить</button>
        </div>
    );
};

export default Card;