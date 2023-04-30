import React from 'react';
import './WheelBox.css'
import { useState } from 'react';

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = ({ symbols }) => {

    const [holdStatus, setHoldStatus] = useState(false)

    return (
        <div className="WheelBox">

            <Wheel symbols={symbols} />
            <WheelHold holdStatus={holdStatus} />
        </div>
    );
}

export default WheelBox;