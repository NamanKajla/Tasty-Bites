import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Recipes from "./pages/Recipes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default App;
