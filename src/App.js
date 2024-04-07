import "./App.scss";

import Navbar from "./components/navBar";
import ParticlesComponent from "./components/utils/particles";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";


function App() {
  const location = useLocation();

  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticlesJsInHomePage && <ParticlesComponent id="particles" />}

      <Navbar />
      <div className="App_main-page-content">
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
