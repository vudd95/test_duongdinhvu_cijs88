import React from 'react'
import Header from '../../components/Header/Header'
import './Completed.css'
import Task from '../../components/Tasks/Task'

const Completed = () => {
  const storageTasks = JSON.parse(localStorage.getItem('tasks'))

  return (
    <>
    <Header></Header>
    <div className='active'>
    <ul className="task-list">
            {storageTasks.map((taskName, index) => (
              <li className="task-item">
                <button>{taskName.status}</button>
                {taskName.name}
              </li>
            ))}
          </ul>
    </div>
    </>
  )
}

export default Completed