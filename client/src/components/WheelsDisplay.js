import React, { useState, useEffect } from 'react';
import WheelBox from './WheelBox';
import './WheelsDisplay.css'

const WheelsDisplay = ({wheelSet, wheelSymbols, updateWheelSymbols, holdStatuses, updateHoldStatuses, wheelSetSchedules}) => {


    const updateHoldStatus = (id) => {
        updateHoldStatuses(id)        
    }

    const handleWheelChange = (id, symbol) => {
        console.log(`handleWheelChange called with id ${id}`)
    }


    return (
        <div className="WheelsDisplay">
            <WheelBox 
                key={1} 
                wheelId = {0}
                symbols={wheelSet}
                symbol= {wheelSymbols[0]}
                holdStatus={holdStatuses[0]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
            />
            <WheelBox 
                key={2} 
                wheelId = {1}
                symbols={wheelSet} 
                symbol = {wheelSymbols[1]} 
                holdStatus={holdStatuses[1]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
            />
            <WheelBox 
                key={3} 
                wheelId = {2}
                symbols={wheelSet} 
                symbol = {wheelSymbols[2]} 
                holdStatus={holdStatuses[2]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
            />
        </div>
    );
}

export default WheelsDisplay;