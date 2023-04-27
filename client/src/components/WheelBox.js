import './WheelBox.css'

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = () => {
    return (
        <div className="WheelBox">
            <h3>Wheelbox</h3>
            <Wheel/>
            <WheelHold/>
        </div>
      );
}
 
export default WheelBox;