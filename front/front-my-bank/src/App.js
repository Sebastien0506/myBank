import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profil from "./page/Profil";
import Home from "./page/Home";
import MesDepence from "./page/Depence";

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/MesDepence" element={<MesDepence />} />
      </Routes>
    </Router>
  );
}

export default App;
