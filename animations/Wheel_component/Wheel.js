import React, { useRef, useState, useEffect } from 'react'
import "./wheel.css"

const Wheel = ({ symbols, chosenSymbol, spinningWheel }) => {

    const [spinning, setSpinning] = useState([true, true, true, true])
    const [stopped, setStopped] = useState([false, false, false, false]);

    const wheelSides = useRef([])
    const spinBtn = useRef(null)
    const overlay = useRef(null)

    useEffect(() => {
        if (spinningWheel) {
            spin();
        }
    }, [spinningWheel]);

    function spin() {
        overlay.current.style.opacity = 0
        wheelSides.current.forEach((wSide, i) => {
            wSide.innerText = symbols[i]
            wSide.style.animationDelay = `${i * 1000}ms`
        })
        setSpinning([true, true, true, true])
        // TODO - add .spinnng-fast for a few secs, then remove.
        setTimeout(() => stopOnSymbol(), 4000) // TODO <-- set tis as a variable
    }

    const stopOnSymbol = function () {
        let wrongSymbols = wheelSides.current.filter(
            (wSide, i) => wSide.innerText !== chosenSymbol && spinning[i]
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

        setTimeout(() => {
            let winnerIndex = wheelSides.current.findIndex(
                (wSide) => wSide.innerText === chosenSymbol
            );
            setSpinning((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? false : val))
            );
            setStopped((prevState) =>
                prevState.map((val, index) => (index === winnerIndex ? true : val))
            );
        }, 2400);
    };

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