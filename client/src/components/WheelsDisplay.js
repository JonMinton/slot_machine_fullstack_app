import React from 'react';
import WheelBox from './WheelBox';
import './WheelsDisplay.css'

const WheelsDisplay = () => {

    const wheelSet = [' 🍒', '🍌', '🍑', '🍆']

    return (
        <div className="WheelsDisplay">
            <WheelBox key={1} symbols={wheelSet} />
            <WheelBox key={2} symbols={wheelSet} />
            <WheelBox key={3} symbols={wheelSet} />
        </div>
    );
}

export default WheelsDisplay;