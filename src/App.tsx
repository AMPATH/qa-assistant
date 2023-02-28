import Login from "./authentication/Login/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const App =  () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>  
    </Routes>
    </Router>
  );
}

export default App;
