import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
