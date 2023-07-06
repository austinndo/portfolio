import './App.css'
import './App_media_screen.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className="Portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
