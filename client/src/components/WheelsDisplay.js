import React, { useState, useEffect } from 'react';
import WheelBox from './WheelBox';
import './WheelsDisplay.css'

const WheelsDisplay = ({ wheelSet, wheelSymbols, updateWheelSymbols, holdStatuses, updateHoldStatuses, wheelSetSchedules }) => {


    const updateHoldStatus = (id) => {
        updateHoldStatuses(id)
    }

    const handleWheelChange = (id, symbol) => {
        console.log(`handleWheelChange called with id ${id}`)
    }


    const [w1Spinning, setW1Spinning] = useState(false)
    const [w2Spinning, setW2Spinning] = useState(false)
    const [w3Spinning, setW3Spinning] = useState(false)
    // const [chosenSymbols, setChosenSymbols] = useState(["🍑", "🍌", "🍆"])

    // const symbols = ["🍑", "🍌", "🍆", "🍏"]
    // // let chosenSymbol = "🍑"

    const spinWheels = () => {
        setW1Spinning(true)
        setTimeout(() => setW2Spinning(true), 500)
        setTimeout(() => setW3Spinning(true), 1000)
    }


    return (
        <div className="WheelsDisplay">
            <WheelBox
                key={1}
                wheelId={0}
                symbols={wheelSet}
                symbol={wheelSymbols[0]}
                holdStatus={holdStatuses[0]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
                spinning={w1Spinning}
            />
            <WheelBox
                key={2}
                wheelId={1}
                symbols={wheelSet}
                symbol={wheelSymbols[1]}
                holdStatus={holdStatuses[1]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
                spinning={w1Spinning}

            />
            <WheelBox
                key={3}
                wheelId={2}
                symbols={wheelSet}
                symbol={wheelSymbols[2]}
                holdStatus={holdStatuses[2]}
                updateHoldStatus={updateHoldStatus}
                wheelSetSchedules={wheelSetSchedules}
                spinning={w1Spinning}

            />

            <button onClick={spinWheels}>SPINSPIN</button>
        </div>
    );
}

export default WheelsDisplay;