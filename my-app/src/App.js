import './App.css';
import { BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import Contact from './Components/Contact';
import Footer from './Components/footer/Footer';
import AboutMe from './Components/Landing/AboutMe';
import Projects from './Components/Projects/Projects';
import Landing from './Components/Landing/Landing';

function App() {
  return ( 
    <>
      <NavBar></NavBar>
          <BrowserRouter>
              <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/contact" element={<Contact/>}/>
              </Routes>
          </BrowserRouter>
        <Footer></Footer>
    </>
  );
}

export default App;

