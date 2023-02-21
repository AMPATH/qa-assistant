import Login from "./authentication/Login/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PatientInformation from "./components/PatientInformation";

const App =  () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/patients" element={<PatientInformation />} />
        <Route path="/login" element={<Login />}/> 
        <Route path="/" element={<Home />}/>     
    </Routes>
    </Router>
  );
}

export default App;
