import NavigationLink from '../NavigationLink/NavigationLink';

import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <NavigationLink text="О компании" path="/about" />
            <NavigationLink text="Каталог" path="/catalog" />
            <NavigationLink text="Контакты" path="/contacts" />
            <NavigationLink text="Корзина" path="/cart" />
        </nav>
    );
}

export default Navigation;