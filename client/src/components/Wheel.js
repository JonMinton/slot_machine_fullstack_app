

import React, {useState, useEffect} from 'react';
import './Wheel.css'


*/
const Wheel = ({ symbols, symbol, wheelSetSchedules, spinningWheel, resetAnimation }) => {

    const [spinning, setSpinning] = useState([false, false, false, false])
    const [stopped, setStopped] = useState([false, false, false, false]);

    const [wheelSetURLs, setWheelSetURLs] = useState([])
    const [chosenURL, setChosenURL] = useState('')

    useEffect(() => {
        setWheelSetURLs(wheelSetSchedules.map(image => image.imageURL))
    }, [wheelSetSchedules])

    useEffect(() => {
        let chosen = wheelSetSchedules.find(image => image.code === symbol)
        setChosenURL(chosen.imageURL)
    })

    const wheelSides = useRef([])
    const overlay = useRef(null)

    // let chosen = wheelSetSchedules.find(image => image.code === symbol)
    // let chosenURL = chosen.imageURL


    // if spinningWheel is passed in as true the spin func is called
    useEffect(() => {
        if (spinningWheel) {
            spin();
        }
    }, [spinningWheel]);

    function spin() {
        console.dir(wheelSides.current[0])
        overlay.current.style.opacity = 0
        wheelSides.current.forEach((wSide, i) => {
            // Set the background image and style properties of the div
            wSide.style.backgroundImage = `url(${wheelSetURLs[i]})`;
            wSide.style.backgroundSize = "cover";
            wSide.style.backgroundPosition = "center";
            wSide.style.backgroundRepeat = "no-repeat";
            wSide.style.animationDelay = `${i * 1000}ms`;
        })
        // state of each image set to true, so animation begins
        setSpinning([true, true, true, true])
        // TODO - add .spinnng-fast for a few secs, then remove.
        setTimeout(() => stopOnSymbol(), 4000) // TODO <-- set this as a variable
    }
    return (
        <div className="Wheel">
            <div className='cropped'>
                <img className='cardImage' src={getUrl()} alt = {symbol} width='100%' />
            </div>

        </div>
        {/* <button ref={spinBtn} className="spin" onClick={spin}>SPIN!</button> */}

    </div>);
}

export default Wheel;