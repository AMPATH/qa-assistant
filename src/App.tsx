import Login from "./authentication/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

const App =  () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
