import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Orders from "./Components/Orders/Orders.component";
import Home from "./Components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient/:id/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default App;
