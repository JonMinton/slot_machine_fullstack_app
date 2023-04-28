
import AdminBox from '../components/AdminBox';
import CashoutBox from '../components/CashoutBox';
import PayIn from '../components/PayIn';
import PlayGame from '../components/PlayGame';
import ShowBalance from '../components/ShowBalance';
import StreakBox from '../components/StreakBox';
import WheelsDisplay from '../components/WheelsDisplay';
import './GameBox.css'

const GameBox = ({activeUser, updateActiveUserBalance}) => {

    const handlePayIn = (amt) => {
        console.log(`${amt} paid in`)
        updateActiveUserBalance(amt)
    }

    return (
        <div className="GameBox">
        <p>GameBox</p>
        <p>The active user is {activeUser.name}</p>
        <p>The active user's balance is {activeUser.balance}</p>
            <PayIn handlePayIn = {handlePayIn}/>
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