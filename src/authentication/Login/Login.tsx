import { useState } from "react";
import storage from "../../app/localStorage";
import { ClipLoader } from "react-spinners";
import Logo from '../../public/am-logo.jpg';

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
    
     //Handle Authentication
    const submitLoginForm= async (e: { preventDefault: () => void; })=>{ 
    if(username.trim().length!==0 && userPassword.trim().length!==0){
    e.preventDefault();
    setErrorMessage('')
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
            storage.saveInfo(response)
            localStorage.setItem('authenticated', response.authenticated)
            location.href = "/"
        }
        if(response.authenticated==false){
        setErrorMessage("Invalid Username or Password!")
        }
    }
    ).catch(e=>{
       setErrorMessage("Network error. Please try again!")
    })
}
    else{
        setErrorMessage("Fill in the form!")
    }
        isLoading(false)
}
//Component to display error messages
    const DisplayErrorMessage = ()=>{
       return(
       <div>
          <p className="text-red-500 font-bold">{errorMessage}</p>
       </div>
       )
    }

    return (
        <section className="h-screen bg-gray-100 flex items-center ">
             <div className="bg-white shadow-md border px-10 pt-10 pb-10 mx-auto">
            <img src = {Logo} className = "h-10 mx-auto mb-10"/>
                 <form>
                     <div>
                        <input autoComplete="off" name = "username"onChange={onChange} className="shadow  border rounded p-4 " type="text" placeholder="Enter username" required />
                            </div>
                             <div className="mt-10">
                             <input autoComplete="off"  name="userPassword" onChange={onChange} className="shadow border rounded p-4" type="password" placeholder="Enter password" required />
                              </div>
                                 <div className="p-5"></div>
                                     <div>
                                  {errorMessage && <DisplayErrorMessage/>}
                                </div>
                            <div className="flex justify-end">
                        {Loading ? <ClipLoader size={50} color ="blue"/>: <button onClick={submitLoginForm} className= "bg-blue-500 hover:bg-blue-700  w-[35%] text-white font-bold py-4 px-4 rounded" type="button"> Log In </button>}
                     </div>
                 </form>
             </div> 
        </section>
    )
}
export default Login;
