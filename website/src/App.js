import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap 

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';
import TopAdvertisement from './components/TopAdvertisement';

const TopAdvertisementDisplay = () => {
  const location = useLocation();

  return (
      <>
          {location.pathname === '/' && <TopAdvertisement />} {}
      </>
  );
};
  
function App() {
  return (
    <Router>
        <TopAdvertisementDisplay></TopAdvertisementDisplay>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;