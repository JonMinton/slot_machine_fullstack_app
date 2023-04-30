import React from 'react';
import './StreakBox.css'

const StreakBox = ({winStreak, loseStreak}) => {
    return (
        <div className="StreakBox">
            <h4>StreakBox</h4>
            <p>Win streak: {winStreak}</p>
            <p>Lose streak: {loseStreak}</p>
        </div>
      );
}
 
export default StreakBox;