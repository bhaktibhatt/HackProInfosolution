import React from 'react'
import './App.css'
import Navbar from "./Components/Navbar.jsx"
import About from "./pages/About.jsx"
import Home from "./Components/Home.jsx"
import Footer from './Components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ethicalhacking from './pages/Ethicalhacking.jsx'
import Pentesting from './pages/Pentesting.jsx'
import Cyberforensics from './pages/Cyberforensics.jsx'
import Bugbounty from './pages/Bugbounty.jsx'
import Computernetwork from './pages/Computernetwork.jsx'
function App() {

  return (
    <Router>
      <div className=' font-raleway '>
        <Navbar/>
       <Routes>
          <Route  exact path='/HackProInfosolution/' element={<Home/>}></Route>
          <Route exact path='/HackProInfosolution/about' element={ <About/> }></Route>
          <Route exact path='/HackProInfosolution/ehticalhackingandcybersecurity' element={<Ethicalhacking/>}></Route>
          <Route exact path='/HackProInfosolution/pentesting' element={<Pentesting/>}></Route>
          <Route  exact path='/HackProInfosolution/cyberforensics' element={<Cyberforensics/>}></Route>
          <Route  exact path='/HackProInfosolution/bugbounty' element={<Bugbounty/>}></Route>
          <Route  exact path='/HackProInfosolution/computernetwork' element={<Computernetwork/>}></Route>

        </Routes> 
       </div>
       {/* <Home/> */}
       <Footer/>
    </Router>
  )
}

export default App
