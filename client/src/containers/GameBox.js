import React from 'react';
import { useEffect, useState } from 'react';
import AdminBox from '../components/AdminBox';
import CashoutBox from '../components/CashoutBox';
import PayIn from '../components/PayIn';
import PlayGame from '../components/PlayGame';
import ShowBalance from '../components/ShowBalance';
import StreakBox from '../components/StreakBox';
import WheelsDisplay from '../components/WheelsDisplay';
import CashoutButton from '../components/CashoutButton';
import CashoutDisplay from '../components/CashoutDisplay';
import './GameBox.css'

const GameBox = ({ balance, updateBalance }) => {

    const [wheelSet, setWheelSet] = useState(['🍒', '🍌', '🍑', '🍆'])

    const [wheelSetSchedules, setWheelSetSchedules] = useState(
        [
            {
                _id: 0,
                name: "Cherry",
                glyph: '🍒',
                reward: 1.00
            },
            {
                _id: 1,
                name: "Banana",
                glyph: '🍌',
                reward: 0.50
            },
            {
                _id: 2,
                name: "Peach",
                glyph: '🍑',
                reward: 0.60
            },
            {
                _id: 3,
                name: "Aubergine",
                glyph: '🍆',
                reward: 0.10
            }
        ]
    )


    const [costPerGame, setCostPerGame] = useState(0.10)

    const [gamePlayedCounter, setGamePlayedCounter] = useState(0)
    const [loseStreakCounter, setLoseStreakCounter] = useState(0)
    const [winStreakCounter, setWinStreakCounter] = useState(0)

    const [wheelSymbols, setWheelSymbols] = useState([wheelSet[0], wheelSet[0], wheelSet[0]])
    const [holdStatuses, setHoldStatuses] = useState([false, false, false])

    useEffect( () => {
        console.log("gamePlayedCounter change detected")
        updateBalance(-costPerGame)   
        updateWheelSymbols()

    }, [gamePlayedCounter])

    useEffect( () => {
        console.log("Change in wheelSymbols state detected")
        const checkAllEqual = arr => arr.every(v => v === arr[0])

        if (checkAllEqual(wheelSymbols)) {
            console.log("all symbols the same: Win!")
            incrementWinStreak()
            payReward()

        } else {
            console.log("all symbols not the same: Lose!")
            incrementLoseStreak()

        }
    }, [wheelSymbols])

    const payReward = () => {
        // Work out symbol on which streak occurs
        const winningSymbol = wheelSymbols[0]

        // Look up payout for symbol
        const activeSymbolPack = wheelSetSchedules.find(sym => sym.glyph === winningSymbol)
        const rewardAmount = activeSymbolPack.reward
        console.log(`rewardAmount is ${rewardAmount}`)
        // increment account with this payout 
        let temp = balance
        temp = temp + rewardAmount
        updateBalance(temp)    
    }

    const incrementWinStreak = () => {
        console.log("incrementWinStreak called")
        let temp = winStreakCounter
        temp = temp + 1
        setWinStreakCounter(temp)
        if (loseStreakCounter !== 0) {
            setLoseStreakCounter(0)
        }
    }

    const incrementLoseStreak = () => {
        console.log("incrementLoseStreak called")
        let temp = loseStreakCounter
        temp = temp + 1
        setLoseStreakCounter(temp)
        if (winStreakCounter !== 0) {
            setWinStreakCounter(0)
        }

    }

    const sampleOne = (arr) => {
        return arr[(Math.random() * arr.length) | 0]
    }

    const handlePlayClicked = () => {
        console.log("handlePlayclicked triggered")
        if (balance >= costPerGame) {
            let temp = gamePlayedCounter
            temp = temp + 1
            setGamePlayedCounter(temp)    
        }
    }

    const updateHoldStatuses = (id) => {
        let tempHoldStatuses = [...holdStatuses]
        tempHoldStatuses[id] = !holdStatuses[id]
        setHoldStatuses(tempHoldStatuses)
    }

    const updateWheelSymbols = () => {
        const tempSymbolOn = wheelSymbols.map((w, index) => {
            if (holdStatuses[index]) {
                return w
            } else {
                return sampleOne(wheelSet)
            }
        })

        setWheelSymbols(tempSymbolOn)

    }


    return (
        <div className="GameBox">

            <div className="gamebox-controls">
                <PayIn handlePayIn={(amt) => { updateBalance(amt) }} />
                <ShowBalance>{balance}</ShowBalance>
                <PlayGame handlePlay={handlePlayClicked} />
            </div>

            <WheelsDisplay 
                wheelSet = {wheelSet}
                wheelSymbols={wheelSymbols} 
                updateWheelSymbols = {updateWheelSymbols}
                holdStatuses = {holdStatuses}
                updateHoldStatuses = {updateHoldStatuses}
            />
            <StreakBox 
                winStreak={winStreakCounter}
                loseStreak = {loseStreakCounter}
            />
            {/* <div className="cashout-container">
                <CashoutButton />
                <CashoutDisplay />
            </div> */}

            {/* 

            
            <CashoutBox/>
            <AdminBox/> */}
        </div>
    );
}

export default GameBox;