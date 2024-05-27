import React from 'react'
import { useEffect, useState } from 'react';
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
import Registrationform from './pages/Registrationform.jsx'
import ScrollToTop from './Components/ScrollToTop.js'
function App() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.classList.add('loader--hidden');
        loader.addEventListener('transitionend', handleTransitionEnd);
      }
    };

    const handleTransitionEnd = (event) => {
      const loader = event.target;
      loader.removeEventListener('transitionend', handleTransitionEnd);
      setIsLoading(false); // Set state to remove the loader
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

    return (
        <Router>
            <div>
                {isLoading && <div className="loader"></div>}
            </div>
            <div className=' font-raleway '>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/ethicalhackingandcybersecurity' element={<Ethicalhacking />}></Route>
                    <Route exact path='/pentesting' element={<Pentesting />}></Route>
                    <Route exact path='/cyberforensics' element={<Cyberforensics />}></Route>
                    <Route exact path='/bugbounty' element={<Bugbounty />}></Route>
                    <Route exact path='/computernetwork' element={<Computernetwork />}></Route>
                    <Route exact path='/registrationform' element={<Registrationform/>}></Route>
                </Routes>
            </div>
            <Footer />
        </Router>
    )
}

export default App
