import Login from "./authentication/Login/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Home from "./components/Home";
const App =  () => {
  const [patients, setPatients] = useState<[]>([])
  const [patientData, setPatientData] = useState<[]>([])


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
  patientData,
  searchPatient,
}

// console.log(patients)
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login />}/> 
        <Route path="/" element={<Home />}/>     
    </Routes>
    </Router>
  );
}

export default App;
