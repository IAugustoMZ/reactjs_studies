import './App.css';
import { useEffect, useState } from 'react';
import { BsBookmarkCheck, BsBookmarkCheckFill, BsTrash } from 'react-icons/bs';

const API = 'http://localhost:5000';

function App() {
  // define state variables
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect to fetch existing todos from the API
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);

      const response = await fetch(API + '/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data);
        })
        .catch((err) => {
        console.error("Failed to fetch todos:", err);
        });
      setLoading(false);
    };
    fetchTodos();
  }, []);
  

  // define submit handler for the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // create a new task object
    const newTask = {
      title,
      time: time,
      id: Math.random(),
      done: false
    }

    // add the new task to the todos array
    await fetch(API + '/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      },
    );

    // update the state with the new task
    setTodos((prevTodos) => [...prevTodos, newTask]);

    // reset the form fields
    setTitle('');
    setTime('');
  }

  // handle marking a todo as done
  const handleDone = async (todo) => {
    todo.done = !todo.done;
    const data = await fetch(API + '/todos/' + todo.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });

    // update the todos state with the modified todo
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === data.id ? (todo = data) : todo
      )
    );
  };

  // define delete handler for a todo item
  const handleDelete = async (id) => {
    await fetch(API + '/todos/' + id, {
      method: 'DELETE'
    });

    // filter out the deleted todo from the todos array
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // display loading message if data is being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>To Do List</h1>
      </div>
      <div className='form-todo'>
        <h2>What do you have to do?</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>Name your task:</label>
            <input 
              type='text' 
              id='title' 
              placeholder='Enter task title' 
              value={title || ''} 
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className='form-control'>
            <label htmlFor='time'>Estimated effort (minutes): </label>
            <input 
              type='text' 
              id='time' 
              placeholder='Enter estimated time in minutes' 
              value={time || ''} 
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <input type='submit' value='Add Task' />
        </form>
      </div>
      <div className='list-todo'>
        <h2>You still have to...</h2>
        {todos.length === 0  && <p>No tasks registered yet!</p>}
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
            <h3 className={todo.done ? 'todo-done': ''}>{todo.title}</h3>
            <p>Estimated time: {todo.time} minutes</p>
            <div className='actions'>
              <span onClick={() => handleDone(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
