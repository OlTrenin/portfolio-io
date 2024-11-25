import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ScrollToTop from "./utils/scroll-to-top";

import React from "react";
import { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project-page";
import Projects from "./pages/Project";
import Contacts from "./pages/Contacts";


import "./style/main.css"
import "./style/reset.css"
function App() {
  return (
    <Fragment>
      <Router>
        <ScrollToTop /> 
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/projects" element = {<Projects />}/>
      <Route path = "/project/:id" element = {<Project />}/>
      <Route path = "/contacts" element = {<Contacts />}/>
    </Routes>
    <Footer />
    </Router>
  </Fragment>
  );
}

export default App;
