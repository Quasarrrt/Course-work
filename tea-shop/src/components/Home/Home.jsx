import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { getSliderImages } from "../../services/api/api";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Home = ({ tea, onCardClick }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getSliderImages()
      .then((res) => {
        const images = res.results.map((item) => {
          return {
            url: item.urls.regular,
          };
        });
        setImages(images);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    images.length >= 1 &&
    tea.length >= 1 && (
      <>
        <div className={styles.slider}>
          <SimpleImageSlider
            width={"100%"}
            height={750}
            images={images}
            showBullets={false}
            showNavs={true}
            autoPlay={true}
            autoPlayDelay={2}
          />
        </div>
        <main className={styles.content}>
          <h1 className={styles.header}>Наши новинки</h1>
          <section className={styles.cardContainer}>
            {tea.map((item, index) => {
              if (index < 6) {
                return (
                  <Card key={item.id} card={item} onCardClick={onCardClick} />
                );
              }
              return null;
            })}
          </section>
          <Link className={styles.button} to="/catalog" exact="true">
            Перейти в каталог
          </Link>
        </main>
      </>
    )
  );
};

export default Home;
