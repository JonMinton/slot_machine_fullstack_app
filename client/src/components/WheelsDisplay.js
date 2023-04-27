import WheelBox from './WheelBox';
import './WheelsDisplay.css'

const WheelsDisplay = () => {
    return (
        <div className="WheelsDisplay">
            <h2>WheelsDisplay</h2>
            <WheelBox/>
            <WheelBox/>
            <WheelBox/>
        </div>
      );
}
 
export default WheelsDisplay;