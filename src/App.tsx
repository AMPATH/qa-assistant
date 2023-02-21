import Login from "./authentication/Login/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
<<<<<<< HEAD
import PatientInformation from "./components/PatientInformation";

=======
>>>>>>> MarcelRepo/Marcel
const App =  () => {
  return (
    <Router>
    <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/patients" element={<PatientInformation />} />
=======
        <Route path="/login" element={<Login />}/> 
        <Route path="/" element={<Home />}/>     
>>>>>>> MarcelRepo/Marcel..
    </Routes>
    </Router>
  );
}

export default App;
