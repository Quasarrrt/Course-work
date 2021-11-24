import React from 'react';

const Card = ({card}) => {


    return (
        <div>
            <img src={card.url} alt='фото чая'/>
        </div>
    );
};

export default Card;