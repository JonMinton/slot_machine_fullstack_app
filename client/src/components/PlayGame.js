import React from 'react';
import './PlayGame.css'

const PlayGame = ({ handlePlay }) => {

    const handleClick = () => {
        handlePlay(-0.10)
    }

    return (
        <div className="PlayGame">
            <button onClick={handleClick}><strong>Play!</strong></button>
        </div>
    );
}

export default PlayGame;