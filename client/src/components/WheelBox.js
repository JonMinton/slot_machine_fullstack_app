import './WheelBox.css'

import Wheel from './Wheel';
import WheelHold from './WheelHold';

const WheelBox = ({symbols}) => {

    const [holdStatus, setHoldStatus] = useState(false)

    return (
        <div className="WheelBox">
            <h3>Wheelbox</h3>
            <Wheel symbols = {symbols}/>
            <WheelHold holdStatus={holdStatus}/>
        </div>
      );
}
 
export default WheelBox;