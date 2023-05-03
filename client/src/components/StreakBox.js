import React from 'react';
import './StreakBox.css'

const StreakBox = ({ winStreak, loseStreak }) => {
    return (
        <div className="StreakBox">

            <span> Streak - Win:{winStreak}</span>
            <span>Lose:{loseStreak}</span>
        </div>
    );
}

export default StreakBox;