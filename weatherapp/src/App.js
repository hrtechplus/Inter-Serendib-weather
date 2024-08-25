import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeadlineList from "./components/HeadLineList";
import HeadlineDetail from "./pages/headLineDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeadlineList />} />
        <Route path="/headline/:title" element={<HeadlineDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
