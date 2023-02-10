import { error } from "console";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import { useLocation } from 'react-router-dom';
import storage from "../app/localStorage";
const Login = () => {
    const location = useLocation()
   const [authenticated,setAuthenticated] = useState(false)
   //set formdata with form input values
    const [FormData,SetFormData] = useState({username:'',userPassword:'',})
    //assign username & password to be form data
    const { username, userPassword} = FormData;
    //handle change input values for forms
    const onChange = (e: { target: { name: any; value: any; }; })=>{SetFormData({...FormData, [e.target.name]:e.target.value})}
    //form submission function     
    const submitForm=(e: { preventDefault: () => void; })=>{
      if(username.trim().length!==0 && userPassword.trim().length!==0){
        e.preventDefault();
        fetch("openmrs/ws/rest/v1/session",{
        headers:{
        'Authorization': 'Basic '+btoa(username+":"+userPassword), 
        },
        method:"GET",
        redirect: 'follow'
        }).then((Response=>Promise.all(([Response.json()])))).then((response)=>{
            console.log("Authenticated:",response[0].authenticated)
            storage.saveInfo(response[0])
            if(response[0].authenticated==true){
                setAuthenticated(true)
                window.location.href = "/"
            }
            if(response[0].authenticated==false){
                alert("Invalid Username or Password!")
            }
        }
        ).catch(e=>{
            console.log("Error:",e)
        })}
    //if form inputs are empty
    else{
        alert("Fill in the form")
    }}
    return (
        <div>
            {authenticated ? <Home/>:<>
            <h1>QA assistant</h1>
            <div>
                <form>
                    <div>
                    <input type="text"  onChange={onChange} name= "username" placeholder="Enter username" required />
                    </div>
                    <div>
                    <input type="password" onChange={onChange} name = "userPassword" placeholder="Enter password" required />
                    </div>
                    <div>
                        <button onClick={submitForm} type="submit">Login</button>
                    </div>
                </form>
            </div>
            </>}  
        </div>
    )
}

export default Login;