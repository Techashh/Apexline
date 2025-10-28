import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Import from './pages/Import';
import Exportcomponent from './pages/Exportcomponent';
import About from './pages/About';
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Import" element={<Import />} />
          <Route path="/Exportcomponent" element={<Exportcomponent />} /> 
          <Route path="/About" element={<About />} />
      
        </Routes>
      </Router>
    </>
  )
}

export default App
