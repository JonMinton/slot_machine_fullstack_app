import './ShowBalance.css'

const ShowBalance = ({children}) => {
    return (
        <div className = 'ShowBalance'>
            <p><b>Balance</b>: £{Math.round(children * 100) / 100}</p>
        </div>

      );
}
 
export default ShowBalance;