import Task from "./Task"


const TaskList = ({tasks, onDelete}) => {
  return (
    <ul className="tasks">      
      {
        tasks.map(
          (task)=><Task key={task.id} onDelete = {onDelete} task={task}/>
        )
      }
    </ul>
  )
}

export default TaskList