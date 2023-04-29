import './PlayGame.css'

const PlayGame = ({ handlePlay }) => {

    const handleClick = () => {
        handlePlay(-0.10)
    }

    return (
        <div className="PlayGame">
            <button onClick={handleClick}><strong>Click to play</strong></button>
        </div>
    );
}

export default PlayGame;