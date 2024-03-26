import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import About from "./pages/About.jsx"
import Home from "./Components/Home.jsx"
import Footer from './Components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ethicalhacking from './pages/Ethicalhacking.jsx'
function App() {

  return (
    <Router>
      <div className=' font-raleway '>
        <Navbar/>
       <Routes>
          <Route  exact path='/HackProInfosolution/' element={<Home/>}></Route>
          <Route exact path='/HackProInfosolution/about' element={ <About/> }></Route>
          <Route exact path='/HackProInfosolution/ehticalhackingandcybersecurity' element={<Ethicalhacking/>}></Route>
          <Route exact path='/HackProInfosolution/ehticalhackingandcybersecurity' element={<Ethicalhacking/>}></Route>
        </Routes> 
       </div>
       {/* <Home/> */}
       <Footer/>
    </Router>
  )
}

export default App
