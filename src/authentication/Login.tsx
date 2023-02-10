import { error } from "console";
import { useEffect, useState } from "react";
import Home from "../components/Home";
import { useLocation } from 'react-router-dom';
const Login = () => {
    const location = useLocation()
   const [authenticated,setAuthenticated] = useState(false)
   //if session cookie exists, proceed to authenticate
   var sessionCookie = window.localStorage.getItem(JSON.parse("Jsession"))
   if(sessionCookie){
    setAuthenticated(true)
   }
   //set formdata with form input values
    const [FormData,SetFormData] = useState({username:'',userPassword:'',})
    //assign username & password inputs to be form data
    const { username, userPassword} = FormData;
    //handle change input values for forms
    const onChange = (e: { target: { name: any; value: any; }; })=>{SetFormData({...FormData, [e.target.name]:e.target.value})}
    //form submission     
    const submitLoginForm=(e: { preventDefault: () => void; })=>{
      if(username.trim().length!==0 && userPassword.trim().length!==0){
        e.preventDefault();
        fetch("openmrs/ws/rest/v1/session",{
        headers:{
        'Authorization': 'Basic '+btoa(username+":"+userPassword), 
        },
        method:"GET",
        redirect: 'follow'
        }).then((Response=>Promise.all(([Response.json()])))).then((response)=>{
            console.log("Authenticated:",response)
            if(response[0].authenticated==true){
                setAuthenticated(true)
                //change url once authenticated.
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
                        <button onClick={submitLoginForm} type="submit">Login</button>
                    </div>
                </form>
            </div>
            </>}  
        </div>
    )
}

export default Login;