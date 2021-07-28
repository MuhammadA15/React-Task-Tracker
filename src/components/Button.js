import PropTypes from 'prop-types'

const Button = ({ text, color, toggleAddTask }) => {
    return (
        <button onClick={toggleAddTask} style={{ backgroundColor: color }} className='btn'>{text}</button>
    )
}

Button.defaultProps = {
    text: 'Empty',
    color: 'black',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    toggleAddTask: PropTypes.func,
}

export default Button
