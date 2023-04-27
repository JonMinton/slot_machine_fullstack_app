
import AdminBox from '../components/AdminBox';
import CashoutBox from '../components/CashoutBox';
import PayIn from '../components/PayIn';
import PlayGame from '../components/PlayGame';
import ShowBalance from '../components/ShowBalance';
import StreakBox from '../components/StreakBox';
import WheelsDisplay from '../components/WheelsDisplay';
import './GameBox.css'

const GameBox = () => {
    return (
        <div className="GameBox">
            <h1>GameBox</h1>
            <PayIn/>
            <WheelsDisplay/>
            <PlayGame/>
            <ShowBalance/>
            <StreakBox/>
            <CashoutBox/>
            <AdminBox/>
        </div>
      );
}
 
export default GameBox;