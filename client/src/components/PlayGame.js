import './PlayGame.css'

const PlayGame = ({handlePlay}) => {

    const handleClick = () => {
        handlePlay(-0.10)
    }

    return (
    <div className="PlayGame">
        <b onClick = {handleClick}>Click to play</b>
    </div>  
    );
}
 
export default PlayGame;