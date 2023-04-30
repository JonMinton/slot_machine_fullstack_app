import './Wheel.css'

const Wheel = ({ symbols, holdIt, previous }) => {

    // const symbols = ['Cherry', 'Banana', 'Orange', 'Apple']
    const sampleOne = (arr) => {
        return arr[(Math.random() * arr.length) | 0]
    }
    return (
        <div className="Wheel">
            {sampleOne(symbols)}
        </div>
    );
}

export default Wheel;