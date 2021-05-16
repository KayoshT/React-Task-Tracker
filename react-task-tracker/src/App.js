// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Code React Epic #1',
      date: 'April 1st at 1:00am',
      reminder: true,
    },
    {
      id: 2, 
      text: 'Code React Epic #2',
      date: 'April 1st at 1:00am',
      reminder: true,
    },
    {
      id: 3, 
      text: 'Code React Epic #3',
      date: 'April 1st at 1:00am',
      reminder: true,
  
    }  
  ])
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()* 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
