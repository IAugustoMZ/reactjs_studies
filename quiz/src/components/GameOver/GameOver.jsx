import './GameOver.css'
import { useContext } from "react"
import WellDone from '../../img/welldone.svg'
import { QuizContext } from "../../context/quiz"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
        <h2>GameOver!</h2>
        <p>Congratulation! You score {quizState.score} points ({quizState.score} out of {quizState.questions.length} questions)</p>
        <p>Thanks for Playing!</p>
        <img src={WellDone} alt="Well Done" />
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Play Again!</button>
    </div>
  )
}

export default GameOver;