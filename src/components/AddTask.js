import PropTypes from 'prop-types'
import { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const [notes, setNotes] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please enter a task')
            return
        }

        const task = {
            text: text,
            day: day,
            reminder: reminder,
            notes: notes,
        }

        addTask(task)

        setText('')
        setDay('')
        setReminder(false)
        setNotes('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Notes</label>
                <input type='text' placeholder='Add Notes' value={notes} onChange={(e) => setNotes(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func,
}

export default AddTask
