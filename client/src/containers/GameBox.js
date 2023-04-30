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


    return (
        <div className="GameBox">

            <div className="gamebox-controls">
                <PayIn handlePayIn={(amt) => { updateBalance(amt) }} />
                <ShowBalance>{balance}</ShowBalance>
                <PlayGame handlePlay={(amt) => { updateBalance(amt) }} />
            </div>

            <WheelsDisplay />
            <div className="cashout-container">
                <CashoutButton />
                <CashoutDisplay />
            </div>

            {/* 

            <StreakBox/>
            <CashoutBox/>
            <AdminBox/> */}
        </div>
    );
}

export default GameBox;