import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./Portfolio";
import CV from "./CV";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/CV" element={<CV />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
