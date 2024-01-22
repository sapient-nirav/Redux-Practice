import React from "react";
import Home from "./components/Home";
import Create from "./components/Create";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Update from "./components/Update";
const App = () => {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </Router>
  );
};

export default App;
