import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppContext, AppContextType } from "./context/AppContext";
import { useState } from "react";
import PatientSearch from "./components/patientSearch/Patient";

const App =  () => {
  const [currentPatient] = useState<Object[]>([])

const contextValue: AppContextType = {
  currentPatient
}

  return (
    <AppContext.Provider value={contextValue}>
    <Router>
    <Routes>
        <Route path="/" element={<PatientSearch />} />
    </Routes>
    </Router>
    </AppContext.Provider>
  );
};

export default App;
