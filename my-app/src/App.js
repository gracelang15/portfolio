import './App.css';
import { HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar';
import React from 'react';
import Contact from './Components/Contact';
import Footer from './Components/footer/Footer';
import AboutMe from './Components/Landing/AboutMe';
import Projects from './Components/Projects/Projects';
import Landing from './Components/Landing/Landing';
import RNA from './Components/Projects/pdfs/RNA';
import CityBike from './Components/Projects/pdfs/CityBike';
import ImageRetrieval from './Components/Projects/pdfs/ImageRetrieval';
import Referral from './Components/Projects/pdfs/Referral';
import Shocktube from './Components/Projects/pdfs/Shocktube';
import EVs from './Components/Projects/pdfs/EVs';
import Resume from './Components/Projects/pdfs/Resume';
import Equitive from './Components/Projects/pdfs/Equitive';
import GenderGap from './Components/Projects/pdfs/GenderGap';

function App() {
  return ( 
    <>
      <NavBar></NavBar>
          <Router>
              <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/rnaproject" element={<RNA/>}/>
                <Route path="/citybikeproject" element={<CityBike/>}/>
                <Route path="/imageretrievalproject" element={<ImageRetrieval/>}/>
                <Route path="/referralproject" element={<Referral/>}/>
                <Route path="/shocktubeproject" element={<Shocktube/>}/>
                <Route path="/evproject" element={<EVs/>}/>
                <Route path="/equitiveproject" element={<Equitive/>}/>
                <Route path="/wagegapproject" element={<GenderGap/>}/>
                <Route path="/resume" element={<Resume/>}/>
              </Routes>
          </Router>
        <Footer></Footer>
    </>
  );
}

export default App;

