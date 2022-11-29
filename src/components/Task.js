import {FaTimes} from "react-icons/fa"

const Task = ({task,onDelete}) => {
  return (
    <li className="task">
      <h4>{task.text}</h4>
      <span onClick={()=>{onDelete(task.id)}} className="remove_task"><FaTimes/></span>      
    </li>
  )
}

export default Task