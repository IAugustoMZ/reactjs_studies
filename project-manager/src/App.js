import './App.css';
import Home from './pages/Home';
import { useState } from 'react';
import List from './components/List';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Person from './components/Person'
import ArrayList from './components/ArrayList';
import SayMyName from './components/SayMyName';
import HelloWorld from './components/HelloWorld';
import ClickEvent from './components/ClickEvent';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import ProjectForm from './components/ProjectForm';
import Conditional from './components/Conditional';
import ProjectName from './components/ProjectName';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const nome = 'Icaro, Zelioli';
  
  const myItems = [
    { id: 1, name: 'Icaro Zelioli', age: 32, profession: 'Data and AI Lead', photo: 'https://avatars.githubusercontent.com/u/42342168?v=4' },
    { id: 2, name: 'John Doe', age: 28, profession: 'Software Engineer', photo: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Jane Smith', age: 30, profession: 'Project Manager', photo: 'https://via.placeholder.com/150' }
  ];

  const [projectName, setProjectName] = useState('');

  return (
    <div className="App">
      {/* <h1>Hello Project Managers !!</h1> */}
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
      {/* <Conditional />
      <ArrayList items={myItems} />
      <ArrayList items={[]} /> */}
      {/* <ProjectName setProjectName={setProjectName}/>
      <h2>Project Name: {projectName}</h2>
      <Notification projectName={projectName} /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/company' element={<Company />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
