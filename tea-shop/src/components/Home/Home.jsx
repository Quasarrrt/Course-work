import React, {useEffect, useState} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import {getCards, getSliderImages} from "../../services/api/api";
import styles from './Home.module.css'
import Card from "../Card/Card";

const Home = ({tea}) => {

    const [images, setImages]=useState([]);

    useEffect(()=>{
        getSliderImages().then(res=> {
            //console.log(res);
            const images= res.results.map(item=>{

                return{

                    url: item.urls.regular,
                }
            })
            setImages(images);
        })
            .catch(err=>{
            console.log(err);
        })

    },[]);

    //console.log("Чай", tea);
    return (
            (images.length >= 1 && tea.length>=1 )&&(
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
                    <main>
                        <h1>Каталог</h1>


                        <section>
                            {

                                tea.map((item, index)=>{
                                    if(index<8){
                                        return <Card key={item.id} card={item}/>
                                    }
                                    return null;
                                    }
                                )
                            }
                        </section>

                    </main>
                </>

            )


    );
};

export default Home;







