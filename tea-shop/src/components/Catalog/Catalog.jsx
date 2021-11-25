import React from 'react';
import styles from './Catalog.module.css'
import Card from "../Card/Card";

const Catalog = ({tea, onCardClick, sortCards}) => {

const onChangeSort=(event)=>{
    sortCards(event.target.value);
}

    return (
        <main className={styles.content}>
            <select id="selectBox" data-selected="" onChange={onChangeSort}>
                <option value="" selected="selected" disabled="disabled">Обычная сортировка</option>
                <option value="min" >По возрастанию цены</option>
                <option value="max" >По убыванию цены</option>
            </select>
            <section className={styles.cardContainer}>
                {
                    tea.map((item)=>{
                            return <Card key={item.id} card={item}  onCardClick={onCardClick}/>
                        }
                    )
                }
            </section>
        </main>
    );
};

export default Catalog;