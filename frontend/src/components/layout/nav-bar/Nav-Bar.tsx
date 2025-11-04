import { NavLink } from 'react-router-dom'
import './Nav-Bar.css'

export default function Navbar() {

  return (
    <div className='Navbar'>
      <h2 className='logo'>
        <NavLink to="/">
          Hitech Website
        </NavLink>
      </h2>

      <div className='nav-links'>
        <NavLink to="/meeting-shower"
        >
          Meeting List
        </NavLink>
        <NavLink to="/meeting-add"
        >
          Add Meeting
        </NavLink>
      </div>
    </div>
  )
}