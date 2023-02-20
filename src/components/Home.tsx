import React, { useEffect, useState } from 'react'
import storage from '../app/localStorage'
import Header from './Header/Header'
import swal from 'sweetalert'
const Home = () => {
const checkUserSession = localStorage.getItem("authenticated");
if(checkUserSession !== "true"){
  window.location.href = "/login"
}
useEffect(()=>{
const banner = localStorage.getItem("Banner")
  if(banner!==null){
    swal({
      title:'Success!',
      text:"Logged In",
      icon:"success",
  })
  }
localStorage.removeItem("Banner")
},[])
return (
  <div>
      <Header/>  
  </div>
)
}
export default Home 