import './Welcome.css'
import { useContext } from 'react'
import Quiz from '../../img/quiz.svg'
import { QuizContext } from '../../context/quiz.jsx'


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id='welcome'>
      <h1>Welcome!</h1>
      <p>Click the button below to start the quiz.</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>Begin!</button>
      <img src={Quiz} alt="Quiz Start" />
    </div>
  )
}

export default Welcome;