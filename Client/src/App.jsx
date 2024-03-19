import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import Hero from "./Components/Hero.jsx"
import Main from "./Components/Home.jsx"
import About from "./pages/About.jsx"
import Home from "./Components/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <Router>
      <div>
        <Navbar/>
       <Routes>
          <Route  exact path='/' element={<Home/>}></Route>
          <Route exact path='/about' element={ <About/> }></Route>
        </Routes> 
       </div>
      </Router>
  )
}

export default App
