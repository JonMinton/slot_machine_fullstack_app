import React from 'react';

const ImageHolder = ({cards}) => {
    const renderCards = cards.map((card, index) => {
        return <img src={card.images.svg}/>
    })
    return (
        <>
            
        </>
    );
}
 
export default ImageHolder;