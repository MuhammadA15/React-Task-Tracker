import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, toggleAddTask, showAddTask }) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{ title }</h1>
            {location.pathname === '/' && 
            <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'red' : 'green'} toggleAddTask={toggleAddTask}/>
            }
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    toggleAddTask: PropTypes.func,
    showAddTask: PropTypes.bool,
}

export default Header
