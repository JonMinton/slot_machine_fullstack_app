import React, {useState, useEffect} from 'react';
import './Wheel.css'

const Wheel = ({ symbols, symbol}) => {


    return (
        <div className="Wheel">
            {symbol}
        </div>
    );
}

export default Wheel;