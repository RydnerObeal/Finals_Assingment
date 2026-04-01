import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { themes } from '../context/ThemeContext'
import '../styles/Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-name">My Portfolio</span>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </NavLink>
        </li>
        <li>
          <button 
            onClick={toggleTheme} 
            className="theme-switcher-btn"
            title="Switch theme"
          >
            🎨 {themes[theme].name}
          </button>
        </li>
      </ul>
    </nav>
  )
}
