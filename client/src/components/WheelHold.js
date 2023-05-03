import React from 'react';
import './WheelHold.css'


const WheelHold = ({hold, toggleHold, preventHold}) => {

    const handleClick = () => {
        console.log("WheelHold toggled")
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