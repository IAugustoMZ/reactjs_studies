import './PickCategory.css'
import { useContext } from "react"
import Category from '../../img/category.svg'
import { QuizContext } from "../../context/quiz"

    
const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions( category) {
    dispatch({ type: 'START_QUIZ', payload: category});
    dispatch({ type: 'REORDER_QUESTIONS' });
  }

  return (
    <div id="category">
        <h2>Pick a Category</h2>
        <p>The questions will be about one of the languages below: </p>
        {quizState.questions.map((question) => (
            <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>
              {question.category}
            </button>
        ))}
        <img src={Category} alt="Quiz Category" />
    </div>
  )
}

export default PickCategory;