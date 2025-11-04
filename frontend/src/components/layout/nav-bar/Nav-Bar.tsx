import { NavLink } from 'react-router-dom'
import './Nav-Bar.css'

export default function Navbar() {

  return (
    <div className='Navbar'>
      <h2 className='logo'>
        <NavLink to="/">
          Theater Website
        </NavLink>
      </h2>

      <div className='nav-links'>
        <NavLink to="/movie-shower"
        >
          Movie List
        </NavLink>
        <NavLink to="/movie-add"
        >
          Add Movie
        </NavLink>
      </div>
    </div>
  )
}