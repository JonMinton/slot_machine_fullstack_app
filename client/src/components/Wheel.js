import React, { useRef, useState, useEffect } from 'react'
import "./wheel.css"
/*
symbols = code for all images for each wheel
symbol = code for image to stop on
wheelSetSchedules = array of objects linking code to imageURLs

*/
const Wheel = ({ symbols, symbol, wheelSetSchedules, spinningWheel }) => {

    const [spinning, setSpinning] = useState([true, true, true, true])
    const [stopped, setStopped] = useState([false, false, false, false]);

    const wheelSides = useRef([])
    const overlay = useRef(null)

    let chosen = wheelSetSchedules.find(image => image.code === symbol)
    let chosenURL = chosen.imageURL
    let imageArray = wheelSetSchedules.map(image => image.imageURL)


    // if spinningWheel is passed in as true the spin func is called
    useEffect(() => {
        if (spinningWheel) {
            spin();
        }
    }, [spinningWheel]);

    function spin() {
        overlay.current.style.opacity = 0
        wheelSides.current.forEach((wSide, i) => {

            // adding an image tag with src of the url taken from schedules
            wSide.innerHTML = <img src={wheelSetSchedules[i].imageURL} key={i} alt={wheelSetSchedules[i].readableName} />
            wSide.style.animationDelay = `${i * 1000}ms`
        })
        // state of each image set to true, so animation begins
        setSpinning([true, true, true, true])
        // TODO - add .spinnng-fast for a few secs, then remove.
        setTimeout(() => stopOnSymbol(), 4000) // TODO <-- set this as a variable
    }

    // put wrong symbols in an array, loop over and remove one at a time, with a delay between
    const stopOnSymbol = function () {
        let wrongSymbols = wheelSides.current.filter(
            (wSide, i) => wSide.getAttribute('src') !== chosenURL && spinning[i]
        );

        const removeSpinning = (index) => {
            setSpinning((prevState) =>
                prevState.map((val, i) => (i === index ? false : val))
            );
        };

        wrongSymbols.forEach((wSide, i) => {
            setTimeout(() => {
                let index = wheelSides.current.findIndex((el) => el === wSide);
                if (index !== -1) {
                    removeSpinning(index);
                }
            }, (i + 1) * 600);
        });

        // when all wrong options removed, stop animation on correct symbol, and keep it vidsible.
        setTimeout(() => {
            let winnerIndex = wheelSides.current.findIndex(
                (wSide) => wSide.getAttribute('src') === chosenURL
            );
            setSpinning((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? false : val))
            );
            setStopped((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? true : val))
            );
        }, 2400);
    };

    // below we map over symbols to create each 'wheel-side' (i was struggling for names for that one... :-)
    // sybmols is only the codes, but dont think it matters at its the right length array and symbol is never used
    // however, nothing is showing up, so...

    // spinnig and stopped states are referenced in ternary ops, changing classes with re-renders

    return (<div className="Wheel">
        <div className="wheel-container">
            {symbols.map((symbol, index) => (
                <div
                    key={index}
                    ref={(el) => (wheelSides.current[index] = el)}
                    className={`symbol s${index + 1} ${spinning[index] ? 'spinning' : ''}  ${stopped[index] ? 'stopped' : ''}`}
                ></div>
            ))}
            <div ref={overlay} className="overlay">?</div>
        </div>
        {/* <button ref={spinBtn} className="spin" onClick={spin}>SPIN!</button> */}

    </div>);
}

export default Wheel;