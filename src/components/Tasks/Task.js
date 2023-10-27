import React from 'react'
import './Task.css'

const Task = (props) => {
  return (
    <div className='task'>
        <input type='checkbox'></input>
        <p>{props.task}</p>
    </div>
  )
}

export default Task 