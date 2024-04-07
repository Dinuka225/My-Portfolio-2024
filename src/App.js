import "./App.scss";
import Navbar from "./components/navBar";
import ParticlesComponent from "./components/utils/particles";
import {useLocation } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const location = useLocation();
  const renderParticlesJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {renderParticlesJsInHomePage && <ParticlesComponent id="particles" />}

      <Navbar />
      <div className="App_main-page-content">
       <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;
