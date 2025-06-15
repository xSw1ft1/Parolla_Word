import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Alphabet from './Components/Alphabet'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/harf-sec" element={<Alphabet />} />
      </Routes>
    </Router>
  )
}

export default App
