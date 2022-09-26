import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import MainContent from "./MainContent";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="" element={<Homepage />} />
          <Route exact path="/MainContent" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
