import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const Header = () => {
    const [Loading,setLoading] = useState(false)
    const handleLogout = async () => {
        setLoading(true)
        await fetch("openmrs/ws/rest/v1/session",{
        method:"delete"
        }).then(()=>{
            localStorage.removeItem('userInformation');
            localStorage.removeItem('authenticated')
            window.location.href = "/login"
        }  
        )
    }
  return (
    <div>
         <header className='bg-themeColor flex justify-between p-4 items-center'>
            <span className='cursor-pointer ml-3'>
            </span>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    {Loading ? <ClipLoader size = {50} color="white"/>:<li className='text-xl hover:bg-slate-300 p-4 rounded-sm cursor-pointer' onClick={handleLogout}>Log out</li>}
                    
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
