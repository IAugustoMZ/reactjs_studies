import './App.css';
import Pessoa from './components/Pessoa'
import SayMyName from './components/SayMyName';
import HelloWorld from './components/HelloWorld';

function App() {
  const nome = 'Icaro, Zelioli';
  return (
    <div className="App">
      <h1>Hello Project Managers !!</h1>
      <HelloWorld />
      <SayMyName name="Icaro" />
      <SayMyName name={nome} />
      <Pessoa 
        name="Icaro Zelioli"
        age={32}
        profession="Data and AI Lead"
        photo="https://avatars.githubusercontent.com/u/42342168?v=4"/>
    </div>
  )
}

export default App
