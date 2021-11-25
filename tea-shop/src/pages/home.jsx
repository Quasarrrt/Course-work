import React from 'react';
import Home from "../components/Home/Home";


const HomePage = ({tea, onCardClick}) => {
    return (
        <Home tea={tea} onCardClick={onCardClick}/>
    );
};

export default HomePage;