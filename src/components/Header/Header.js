import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1>#todo</h1>
        <ul>
            <li><Link to="/" className='list-item'>All</Link></li>
            <li><Link to="/active" className='list-item'>Active</Link></li>
            <li><Link to="/completed" className='list-item'>Completed</Link></li>
        </ul>
    </div>
  )
}

export default Header