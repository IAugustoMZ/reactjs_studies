import './App.css'
import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import Question from './components/Question/Question.jsx';
import GameOver from './components/GameOver/GameOver.jsx';
import PickCategory from './components/PickCategory/PickCategory.jsx';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  // use effect to reorder questions when the game stage changes
  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, []);
  
  return (
    <div className="App">
      <h1>Programming Quiz</h1>
      {quizState.gameStage === 'start' && <Welcome />}
      {quizState.gameStage === 'category' && <PickCategory />}
      {quizState.gameStage === 'playing' && <Question />}
      {quizState.gameStage === 'end' && <GameOver />}
    </div>
  )
}

export default App;