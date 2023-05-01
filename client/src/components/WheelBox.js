import React from 'react';
import './WheelBox.css'
import { useState } from 'react';

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = ({ wheelId, symbols, symbol, holdStatus, updateHoldStatus, wheelSetSchedules}) => {

    const handleToggle = () => {
        updateHoldStatus(wheelId)
    }


    return (
        <div className="WheelBox">
            <Wheel 
                symbols={symbols} 
                symbol = {symbol}
                wheelSetSchedules = {wheelSetSchedules}
            />
            <WheelHold hold={holdStatus} toggleHold= {handleToggle}/>
        </div>
    );
}

export default WheelBox;