
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PatientInformation from "./components/PatientInformation";


const App =  () => {

// console.log(patients)
  return (

    <Router>
    <Routes>
        <Route path="/patients/:id" element={<PatientInformation />} />
    </Routes>
    </Router>

  );
};

export default App;
