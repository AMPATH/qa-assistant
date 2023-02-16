import React, { useEffect, useState } from 'react'
import storage from '../app/localStorage'
import Header from './Header/Header'
const Home = () => {
const checkUserSession = localStorage.getItem("authenticated");
if(checkUserSession !== "true"){
  window.location.href = "/login"
}
  return (
    <div>
        <Header/>
    </div>
  )
}
export default Home