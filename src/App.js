import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search.js";
import Top from "./components/Top.js";
import Watch from "./components/Watch.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
