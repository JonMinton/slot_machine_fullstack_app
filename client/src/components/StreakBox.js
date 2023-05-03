import React from 'react';
import './StreakBox.css'

const StreakBox = ({ winStreak, loseStreak }) => {

    // The idea of this is that the display will be two one digit wheels, so always 
    // shown to places, and a different colour compared with surrounding display
    function zeroPad(numberStr) {
        console.log(numberStr)
        var numString = numberStr.toString();          
        console.log(numString)
        var paddedStr = numString.padStart(2, "0")
        console.log(paddedStr)
        return paddedStr;
      }
      
      
    return (
        <div className="StreakBox">
            <span> Streak - Win: <span className="StreakBox-Number">{zeroPad(winStreak)}</span> </span>
            <span>Lose: <span className="StreakBox-Number">{zeroPad(loseStreak)}</span></span>
        </div>
    );
}

export default StreakBox;