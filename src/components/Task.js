import PropTypes from 'prop-types'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import '../styles/Task.css'

const Task = ({ task, onDelete, onToggle }) => {
    const [showExpandedTask, setShowExpandedTask] = useState(false)

    const onToggleExpand = () => {
        setShowExpandedTask(!showExpandedTask)
    }

    return (
        <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={() => onToggle(task.id)}>
            <h4>{task.text} <FaTimes className='deleteIcon' style={{ 'color' : 'red', 'cursor': 'pointer'}} onClick={() => onDelete(task.id)}/></h4>
            <h4 style={{ 'fontWeight' : '600' }}>{task.day}</h4>
            {task.notes && <h6 className='expand-btn' onClick={() => onToggleExpand()}>{showExpandedTask ? 'Close' : 'View Notes'}</h6>}
            {showExpandedTask && <div>
                <hr></hr>
                <h5>Notes: {task.notes}</h5>
            </div>}
        </div>
    )
}

Task.propTypes = {
    task: PropTypes.object,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func,
}

export default Task
