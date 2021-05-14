// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
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
    console.log(id)
  }

  return (
    <div className='container'>
      <Header  />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show'
      )}
    </div>
  );
}

export default App;
