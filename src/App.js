import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import NavBar from "./components/Navbar"
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route path = "/" element = {<HomePage />}></Route>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
