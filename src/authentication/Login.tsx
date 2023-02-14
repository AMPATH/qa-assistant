import { useEffect, useState } from "react";
import storage from "../app/localStorage";
import { ClipLoader } from "react-spinners";
const Login = () => {

    const userInformation = localStorage.getItem("authenticated")
    if(userInformation == "true"){
        window.location.href = "/"
    }

    const [errorMessage,setErrorMessage] = useState("");
    const [FormData,SetFormData] = useState({username:'',userPassword:'',})
    const { username, userPassword} = FormData;
    const [Loading,isLoading] = useState(false)

    const onChange = (e: { target: { name: any; value: any; };
     })=>{SetFormData({...FormData, [e.target.name]:e.target.value})}  

    const submitLoginForm= async (e: { preventDefault: () => void; })=>{ 
    if(username.trim().length!==0 && userPassword.trim().length!==0){
    e.preventDefault();
    isLoading(true)
    await fetch("openmrs/ws/rest/v1/session",{
    headers:{
    'Authorization': 'Basic '+btoa(username+":"+userPassword), 
    },
    method:"GET",
    redirect: 'follow'
    })
    .then((Response=>Promise.all(([Response.headers, Response.json()]))))
    .then(([headers,response])=>{
       console.log("response:",response)
        if(response.authenticated==true){
            console.log("authenticated:",response.authenticated)
            console.log(username,userPassword)
            storage.saveInfo(response)
            localStorage.setItem('authenticated', response.authenticated)
            location.href = "/"
        }
        if(response.authenticated==false){
            setErrorMessage("Invalid username or password")
        }
    }
    ).catch(e=>{
       setErrorMessage("Unknown Error!, Please Try Again!")
    })
SetFormData({username:'',userPassword:''})
}
    else{
        setErrorMessage("Form Has Empty Values!")
    }
    isLoading(false)
}
    const ErrorComponent = ()=>{
       return(
        <div className="p-4 bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4">
        <p style={{color:'red'}}>{errorMessage}</p><br></br>
        <button className= "bg-red-500 hover:bg-red-700  w-[40%] mx-auto text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"onClick={()=>{setErrorMessage("")}}>Try Again</button>
        </div>
       )
    }
    return (
        <section className="h-full gradient-form bg-gray-200 h-screen">
        <div className="w-[40%] max-auto mx-auto p-4">
            <div className="container py-2 px-6 h-full"></div>
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"></div>
            <h1 className="text-4xl text-center mt-16">QA ASSISTANT</h1>
            {Loading ? <ClipLoader size={60} color="blue"/>:<>
             {errorMessage ? <ErrorComponent/>:<>
             <div className="p-4 bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 mt-4">
             <div className = "block text-gray-700 text-sm font-bold mb-2 p-4" > Username </div>
                 <form>
                     <div className="p-2">
                     <input autoComplete="off" name = "username"onChange={onChange} className="shadow appearance-none border rounded w-full p-4 leading-tight" type="text" placeholder="Enter username" required />
                     </div>
                     <div className="p-2">
                     <div className = "block text-gray-800 text-sm font-bold mb-2 p-4"> Password </div>
                     <input autoComplete="off"  name="userPassword" onChange={onChange} className="shadow appearance-none border rounded w-full p-4 leading-tight w-full p-4" type="password" placeholder="Enter password" required />
                     </div>
                     <div className="p-4"></div>
                     <div className="flex items-center justify-between">
                         <button onClick={submitLoginForm} className= "bg-blue-500 hover:bg-blue-700  w-[60%] mx-auto text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button"> login </button>
                     </div>
                 </form>
             </div> 
             </>}
             </>
            }
        </div>
        </section>
    )
}
export default Login;