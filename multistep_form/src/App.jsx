import './App.css';
import { useState } from 'react';
import Steps from './Steps/Steps';
import { FiSend } from 'react-icons/fi';
import { useForm } from './hooks/useForm';
import Thanks from './components/Thanks/Thanks';
import UserForm from './components/UserForm/UserForm';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import ReviewForm from './components/ReviewForm/ReviewForm';

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comments: ''
};

function App() {

  const [formData, setFormData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setFormData((prev) => {
      return { ...prev, [key]: value }
    })
  };

  const formComponents = 
  [
    <UserForm data={formData} fieldHandler={updateFieldHandler}/>,
    <ReviewForm data={formData} fieldHandler={updateFieldHandler}/>,
    <Thanks data={formData}/>
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="App">
      <div className="header">
        <h2>Evaluate us!</h2>
        <p>We're happy with your purchase! Use the form below to rate your experience!</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Previous</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit">
                <span>Next</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button" onClick={() => alert('Form submitted!')}>
                <span>Send Evaluation!</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App;
