import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  console.log("Rendering the component")
  // const tasks = ["Task 1", "Task 2"]
  const [tasks,setTasks] = useState([])
  // const stateVar = useState(true)
  // console.log(stateVar)

  const taskElements = tasks.map((task) => {
    return <h3>{task}</h3>
  })

  function addTask(){
    const taskNew = `Task ${tasks.length + 1}`
    // tasks.push(taskNew)
    setTasks((prevTasks) => {
      return [...prevTasks,taskNew]
    })
    console.log(tasks)
  }

  return (
    <div>
      {taskElements}
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default App;
