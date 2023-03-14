import Login from "./authentication/Login/Login";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
const App =  () => {
  return (
    <Router>
    <Routes>
        <Route path="/login" element={<Login />}/> 
    </Routes>
    </Router>
  );
}

export default App;
