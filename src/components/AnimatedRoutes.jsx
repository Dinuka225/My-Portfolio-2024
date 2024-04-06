import React from 'react';
import './styles.scss';
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";

const AnimatedRoutes = () => {
  
  return(
    <Routes>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AnimatedRoutes;