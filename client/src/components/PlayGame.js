

import React from 'react';
import './PlayGame.css'

const PlayGame = ({ handlePlay }) => {


    const handleClick = () => {
        handlePlay()
    }

    return (
        <div className="PlayGame">
            <button onClick={handleClick}><strong>Play!</strong></button>
        </div>
    );
}

export default PlayGame;