import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects";
import Footer from "./Footer.jsx";
import "./App.css";
import { Route } from "react-router";

function App() {
  return (
    <>
      <Route>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Footer />
      </Route>
    </>
  );
}

export default App;
