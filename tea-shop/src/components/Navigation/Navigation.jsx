import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  function burgerOnClick() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  return (
    <nav className={"nav"}>
      <div
        className={
          isBurgerMenuOpen ? "nav__burger nav__burger_opened" : "nav__burger"
        }
        onClick={burgerOnClick}
      />
      <div className={isBurgerMenuOpen ? "nav__links" : "nav_links_desktop"}>
        <div
          className={
            isBurgerMenuOpen ? "nav__links-wrapper" : "nav_links_desktop"
          }
        >
          <NavLink
            activeClassName="nav__link_active"
            to="/about"
            className={
              isBurgerMenuOpen ? "nav__link nav__link_show" : "nav__link"
            }
          >
            О компании
          </NavLink>
          <NavLink
            activeClassName="nav__link_active"
            to="/catalog"
            className={
              isBurgerMenuOpen ? "nav__link nav__link_show" : "nav__link"
            }
          >
            Каталог
          </NavLink>
          <NavLink
            activeClassName="nav__link_active"
            to="/contacts"
            className={
              isBurgerMenuOpen ? "nav__link nav__link_show" : "nav__link"
            }
          >
            Контакты
          </NavLink>
          <NavLink
            activeClassName="nav__link_active"
            to="/cart"
            className={
              isBurgerMenuOpen ? "nav__link nav__link_show" : "nav__link"
            }
          >
            Корзина
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
