import './App.css';
import List from './components/List';
import Person from './components/Person'
import ArrayList from './components/ArrayList';
import SayMyName from './components/SayMyName';
import HelloWorld from './components/HelloWorld';
import ClickEvent from './components/ClickEvent';
import ProjectForm from './components/ProjectForm';
import Conditional from './components/Conditional';

function App() {
  const nome = 'Icaro, Zelioli';
  
  const myItems = [
    { id: 1, name: 'Icaro Zelioli', age: 32, profession: 'Data and AI Lead', photo: 'https://avatars.githubusercontent.com/u/42342168?v=4' },
    { id: 2, name: 'John Doe', age: 28, profession: 'Software Engineer', photo: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jane Smith', age: 30, profession: 'Project Manager', photo: 'https://via.placeholder.com/150' }
  ];

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
      <ArrayList items={myItems} />
      <ArrayList items={[]} />
    </div>
    

  )
}

export default App
