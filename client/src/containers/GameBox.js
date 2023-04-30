import React from 'react';
import { useEffect, useState } from 'react';
import AdminBox from '../components/AdminBox';
import CashoutBox from '../components/CashoutBox';
import PayIn from '../components/PayIn';
import PlayGame from '../components/PlayGame';
import ShowBalance from '../components/ShowBalance';
import StreakBox from '../components/StreakBox';
import WheelsDisplay from '../components/WheelsDisplay';
import './GameBox.css'

const GameBox = ({balance, updateBalance}) => {


    return (
        <div className="GameBox">
        <p>GameBox</p>
            <PayIn handlePayIn = {(amt) => {updateBalance(amt)}}/>
            <PlayGame handlePlay = {(amt) => {updateBalance(amt)}} />
            <ShowBalance>{balance}</ShowBalance>
            <WheelsDisplay/>
            {/* 

            <StreakBox/>
            <CashoutBox/>
            <AdminBox/> */}
        </div>
      );
}
 
export default GameBox;