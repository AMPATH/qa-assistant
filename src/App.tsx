import Login from "./authentication/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PatientInformation from "./components/PatientInformation";

const App =  () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/patients" element={<PatientInformation />} />
    </Routes>
    </Router>
  );
}

export default App;
