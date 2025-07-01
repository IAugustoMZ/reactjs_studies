import './App.css';
import List from './components/List';
import Person from './components/Person'
import SayMyName from './components/SayMyName';
import HelloWorld from './components/HelloWorld';
import ClickEvent from './components/ClickEvent';
import ProjectForm from './components/ProjectForm';
import Conditional from './components/Conditional';

function App() {
  const nome = 'Icaro, Zelioli';
  return (
    <div className="App">
      <h1>Hello Project Managers !!</h1>
      {/* <HelloWorld />
      <SayMyName name="Icaro" />
      <SayMyName name={nome} />
      <Person 
        name="Icaro Zelioli"
        age={32}
        profession="Data and AI Lead"
        photo="https://avatars.githubusercontent.com/u/42342168?v=4"/>
        <List /> */}
      {/* <ClickEvent /> */}
      {/* <ClickEvent project_name="React JS Studies"/> */}
      {/* <ProjectForm /> */}
      <Conditional />
    </div>
    

  )
}

export default App
