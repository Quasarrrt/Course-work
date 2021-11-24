import styles from './App.module.css';
import AppHeader from "../AppHeader/AppHeader";
import { Routes ,Route } from 'react-router-dom';
import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";
import {getCards} from "../../services/api/api";
import {useEffect, useState} from "react";

function App() {

    const [tea, setTea]=useState([]);
    useEffect(()=>{
        getCards().then(res=> {
            console.log(res);
            const tea= res.map(item=>{
                return{
                    price: item.height,
                    url: item.urls.regular,
                }
            })

            setTea(tea);
        })
            .catch(err=>{
                console.log(err);
            })
    },[]);


    //console.log("Чай", tea);

  return (
      <>
          <AppHeader/>
          <Routes>
              <Route path="/" element={<HomePage tea={tea}/>} exact="true"/>
              <Route path="/about" element={<AboutPage/>} exact="true"/>
          </Routes>
      </>


  );
}

export default App;
