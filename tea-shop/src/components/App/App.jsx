import AppHeader from "../AppHeader/AppHeader";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";
import { getCards } from "../../services/api/api";
import { useEffect, useState } from "react";
import CatalogPage from "../../pages/catalog";
import ContactsPage from "../../pages/contacts";
import CartPage from "../../pages/cart";

const names = [
  "Мелисса-имбирь",
  "Мятный чай",
  "Имбирный чай",
  "Сердце рассвета",
  "Цветочный космос",
  "Пуэр",
  "Цзинь Цзюнь Мэй",
  "Непал Ян Чиабари",
  "Доброе утро",
  "Ягодный пуэр",
  "Цитрусовое солнце",
  "Оолонг",
  "Хоу Куй Хуаншань",
  "Шен пуэр",
  "Гекуро",
  "Воздушный зефир",
  "Солнечная Калифорния",
  "Цейлонский Шаулэндс",
  "Дынный лимонад",
  "Серебряные иглы Чанша",
  "Да Хун Пао",
];

function App() {
  const [tea, setTea] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCards()
      .then((res) => {
        const tea = res.map((item, index) => {
          return {
            name: names[index],
            price: item.height,
            url: item.urls.regular,
            id: item.id,
            quantity: 1,
          };
        });

        setTea(tea);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onCardClick = (item) => {
    const find = cart.find((card) => card.id === item.id);
    if (!find) {
      setCart([...cart, item]);
    } else {
      const newArray = cart.map((card) =>
        card.id === item.id ? { ...card, quantity: card.quantity + 1 } : card
      );
      setCart([...newArray]);
    }
  };
  const onCardDelete = (id) => {
    const array = cart.filter((item) => item.id !== id);
    setCart(array);
  };

  const sortCards = (value) => {
    if (value === "min") {
      const array = tea.sort((a, b) => a.price - b.price);
      setTea([...array]);
    } else if (value === "max") {
      const array = tea.sort((a, b) => b.price - a.price);
      setTea([...array]);
    }
  };

  return (
    <>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={<HomePage tea={tea} onCardClick={onCardClick} />}
          exact="true"
        />
        <Route path="/about" element={<AboutPage />} exact="true" />
        <Route
          path="/catalog"
          element={
            <CatalogPage
              tea={tea}
              onCardClick={onCardClick}
              sortCards={sortCards}
            />
          }
          exact="true"
        />
        <Route path="/contacts" element={<ContactsPage />} exact="true" />
        <Route
          path="/cart"
          element={<CartPage cart={cart} onCardDelete={onCardDelete} />}
          exact="true"
        />
      </Routes>
    </>
  );
}

export default App;
