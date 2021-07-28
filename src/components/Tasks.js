import PropTypes from 'prop-types'
import Task from './Task'; 

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
          task: PropTypes.string,
          day: PropTypes.string,
          reminder: PropTypes.bool,
          notes: PropTypes.string,
        })
    ),
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Tasks
