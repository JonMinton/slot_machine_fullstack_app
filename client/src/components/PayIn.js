import './PayIn.css'

const PayIn = ({handlePayIn}) => {

    return (
    <div className = "PayIn">
        <p onClick = {(e) => {handlePayIn(0.50)}}>Put in 50p</p>
    </div>  );
}
 
export default PayIn;