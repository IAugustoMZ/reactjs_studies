import './App.css'
import Wedding from './assets/wedding.jpeg'
import Title from './components/Title/Title.jsx'
import useCountdown from './hooks/useCountdown.jsx'
import Counter from './components/Counter/Counter.jsx'


function App() {
  const { days, hours, minutes, seconds } = useCountdown('2025-12-13T19:00:00');

  return (
    <div className="App" style={{ backgroundImage: `url(${Wedding})` }}>
      <div className="container">
        <Title title="Countdown to Wedding Day!" />
        <Title title="Congratulations Patrícia and Icaro!" />
        <div className="countdown-container">
          <Counter title="Days" number={days} />
          <Counter title="Hours" number={hours} />
          <Counter title="Minutes" number={minutes} />
          <Counter title="Seconds" number={seconds} />
        </div>
      </div>
    </div>
  )
}

export default App
