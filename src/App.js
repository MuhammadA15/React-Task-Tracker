import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import Navbar from './components/Navbar'
import ContactUs from './components/ContactUs'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState('')

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  } 

  useEffect(() => {
    getTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    
    getTasks()
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    taskToToggle.reminder = !taskToToggle.reminder
    
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(taskToToggle)
    })
    
    getTasks()
  }

  const addTask = async (task) => {
    await fetch('http://localhost:5000/tasks', {
      method: 'POST', 
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    
    getTasks()
  }

  const toggleAddTask = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Router>
      <Navbar />
      <div className="containers">
      <Header title='Task Tracker' toggleAddTask={toggleAddTask} showAddTask={showAddTask}/>
        <Route path='/' exact render={
          (props) => ( 
            <>
              {showAddTask && <AddTask addTask={addTask} showAddTask={showAddTask}/>}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks Listed'}
            </>
        )}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={ContactUs}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
