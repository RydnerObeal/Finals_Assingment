import { Link } from 'react-router-dom'
import '../styles/HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-heading">Hi, I'm a React Developer</h2>
        <p className="hero-tagline">
          Passionate about building clean, modular, and performant web applications.
        </p>
        <div className="hero-actions">
          <Link to="/about" className="btn btn-primary">Learn About Me</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </div>
    </section>
  )
}
