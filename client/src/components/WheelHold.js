
import useSound from 'use-sound';
import pressButtonSound from '../sounds/buttonPress.wav'

import React from 'react';
import './WheelHold.css'


const WheelHold = ({hold, toggleHold, preventHold}) => {

    const [makePressButtonSound] = useSound(
        pressButtonSound
    )

    const handleClick = () => {
        console.log("WheelHold toggled")
        makePressButtonSound()
        if (!preventHold) {
            toggleHold()
        }
    }

    return (
        <div className="WheelHold">
            {hold ? <button className="ButtonOn" onClick = {handleClick}>Hold</button> : <button className="ButtonOff" onClick={handleClick} >Hold</button>}
        </div>
    );
}

export default WheelHold;