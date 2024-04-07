import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../containers/home";
import About from "../containers/about";
import Skills from "../containers/skills";
import Portfolio from "../containers/portfolio";
import Contact from "../containers/contact";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
