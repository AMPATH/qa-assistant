import Login from "./authentication/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { AppContext, AppContextType } from "./context/AppContext";
import { useState } from "react";
import SideNavBar from "./components/SideNavBar";
import Header from "./components/Header";

const App =  () => {
  const [patients, setPatients] = useState<[]>([])
  const searchPatient = async (query: string) => {           
       
    await fetch(`openmrs/ws/rest/v1/patient?q=${query}&v=default&limit=full`,{
        // headers:{
        //     'Authorization': 'Basic '+btoa(username+":"+password),
        //     },
        method:"GET",
        redirect: 'follow'
    })
    .then((Response=>Promise.all(([Response.headers, Response.json()]))))
    .then(([_,response])=> setPatients(response.results))
}

const contextValue: AppContextType = {
  patients,
  searchPatient,
}

// console.log(patients)
  return (
    <AppContext.Provider value={contextValue}>
    <Router>
    <Header />
      <SideNavBar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />    
    </Routes>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
