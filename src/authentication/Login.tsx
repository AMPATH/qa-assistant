import { useEffect, useState } from "react";
import Home from "../components/Home";
import { useLocation, useNavigate } from 'react-router-dom';
import storage from "../app/localStorage";


const Login = () => {
   useEffect(()=>{
    const userInformation = localStorage.getItem("authenticated")
   if(userInformation == "true"){
        window.location.href = "/"
    }
   },[])
    const [FormData,SetFormData] = useState({username:'',userPassword:'',})
    const { username, userPassword} = FormData;
    const navigate = useNavigate()
    const onChange = (e: { target: { name: any; value: any; }; })=>{SetFormData({...FormData, [e.target.name]:e.target.value})}   
    const submitLoginForm=(e: { preventDefault: () => void; })=>{
        e.preventDefault();
      if(username.trim().length!==0 && userPassword.trim().length!==0){
        fetch("openmrs/ws/rest/v1/session",{
        headers:{
        'Authorization': 'Basic '+btoa(username+":"+userPassword), 
        },
        method:"GET",
        redirect: 'follow'
        }).then((Response=>Promise.all(([Response.json()])))).then((response)=>{
            console.log("Authenticated:",response[0].authenticated)
            storage.saveInfo(response[0])
            localStorage.setItem("authenticated",response[0].authenticated)
            if(response[0].authenticated==true){
                navigate('/')
            }
            if(response[0].authenticated==false){
                alert("Invalid Username or Password!")
            }
        }
        ).catch(e=>{
            console.log("Error:",e)
        })}
    else{
        console.log("Fill in Login Forms")
    }}


    return (
        <section className="h-screen gradient-form bg-gray-200">
        <div className="w-[40%] max-auto mx-auto p-4">
            <div className="container py-2 px-6 h-full"></div>
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"></div>
            <h1 className="text-4xl text-center mt-16">QA ASSISTANT</h1>
            <div className="p-4 bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4">
            <div className = "block text-gray-700 text-sm font-bold mb-2 p-4" > Username </div>
                <form>
                    <div className="p-2">
                    <input name = "username"onChange={onChange} className="shadow appearance-none border rounded w-full p-4 leading-tight" type="text" placeholder="Enter username" required />
                    </div>
                    <div className="p-2">
                    <div className = "block text-gray-800 text-sm font-bold mb-2 p-4"> Password </div>
                    <input  name="userPassword" onChange={onChange} className="shadow appearance-none border rounded w-full p-4 leading-tight w-full p-4" type="password" placeholder="Enter password" required />
                    </div>
                    <div className="p-4"></div>
                    <div className="flex items-center justify-between">
                        <button onClick={submitLoginForm} className= "bg-blue-500 hover:bg-blue-700  w-[60%] mx-auto text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> login </button>
                    </div>
                </form>
            </div>
        </div>
        </section>
    )
}

export default Login;
