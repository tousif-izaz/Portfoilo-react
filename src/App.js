import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path = "/contact" element = {<Contact />}></Route>
      </Routes>
      </Router>
      <div className="">
      <Footer />
      </div>
    </div>
  );
}

export default App;
