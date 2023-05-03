import useSound from 'use-sound';
import payInSound from '../../src/sounds/insertCoin.wav';

import React from 'react';
import './PayIn.css'

const PayIn = ({ handlePayIn }) => {

    const [makePayInSound] = useSound(
        payInSound
    )


    const handlePayInAndNoise = () => {
        makePayInSound()
        handlePayIn(0.50)
    }

    return (
        <>
            <div className="PayIn" onClick={handlePayInAndNoise}>

                <span id="coin-price">50p</span>

            </div>
        </>

    );
}

export default PayIn;