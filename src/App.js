import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetails from "./components/ProjectDetails";


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route path = "/" element = {<HomePage />}></Route>
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
