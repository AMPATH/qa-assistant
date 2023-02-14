import Login from "./authentication/Login";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
const App =  () => {
  return (
    <Router>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />     
    </Routes>
    </Router>
  );
}

export default App;
