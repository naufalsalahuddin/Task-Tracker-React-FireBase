import Header from "./components/Header";
import TaskList from "./components/TaskList";
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text:'hello world 1',    
    },
    {
      id:2,
      text:'hello world 2',    
    },
    {
      id:3,
      text:'hello world 3',    
    },
  ])
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>
    task.id !== id
  ))
}

  return (
    <div className="App_Container">
      <Header title="Task Tracker"/>
      <TaskList onDelete = {deleteTask} tasks = {tasks}/>
    </div>
  );
}

export default App;
