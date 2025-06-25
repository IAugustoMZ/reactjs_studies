import './App.css';

function App() {
  const name = 'Project Manager';
  function sum(a, b){
    return a + b;
  }
  const url = 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png';
  return (
    <div className="App">
      <h1>Hello Project Managers !!</h1>
      <p>This is my first React app</p>
      <h2>I'm changing the JSX feature.</h2>
      <p>Welcome to {name}!</p>
      <p>Let's build something amazing together.</p>
      <p>Example of simple sum: {2+2}</p>
      <p>Example of function call: {sum(3, 4)}</p>
      <img src={url} alt="Dynamic Placeholder" />
    </div>
  );
}

export default App;
