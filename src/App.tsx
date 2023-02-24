import Login from "./authentication/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AppContext, AppContextType } from "./context/AppContext";
import { useState } from "react";
import PatientInformation from "./components/PatientInformation";
import Orders from "./components/Orders/Orders";

const App =  () => {
  const [patients, setPatients] = useState<[]>([])
  const [patientData, setPatientData] = useState<[]>([])


  const searchPatient = async (query: string) => {           
       
    await fetch(`openmrs/ws/rest/v1/patient?q=${query}&v=default&limit=full`,{
        method:"GET",
        redirect: 'follow'
    })
    .then((Response=>Promise.all(([Response.headers, Response.json()]))))
    .then(([_,response])=> setPatients(response.results))
}

const contextValue: AppContextType = {
  patients,
  patientData,
  searchPatient,
}

// console.log(patients)
  return (
    <AppContext.Provider value={contextValue}>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/patients/:id" element={<PatientInformation />} />
        <Route path="/login" element={<Login />}/>   
        <Route path="/orders" element={<Orders />} />
    </Routes>
    </Router>
    </AppContext.Provider>
  );
};

export default App;
