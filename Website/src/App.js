

import React from "react";
import Home from "./views/pages/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
