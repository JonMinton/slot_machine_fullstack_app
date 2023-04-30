import React from 'react';
import './WheelBox.css'
import { useState } from 'react';

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = ({ wheelId, symbols, symbol, holdStatus, updateHoldStatus}) => {

    const handleToggle = () => {
        updateHoldStatus(wheelId)
    }


    return (
        <div className="WheelBox">
            <Wheel 
                symbols={symbols} 
                symbol = {symbol}
            />
            <WheelHold hold={holdStatus} toggleHold= {handleToggle}/>
        </div>
    );
}

export default WheelBox;