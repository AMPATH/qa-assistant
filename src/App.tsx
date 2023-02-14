import Login from "./authentication/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App =  () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />    
    </Routes>
  );
}

export default App;
