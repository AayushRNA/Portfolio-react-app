import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects";
import Footer from "./Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
