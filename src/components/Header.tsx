import React from 'react'
import storage from '../app/localStorage'
import logo from '../../public/logo/ampath_Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const data = storage.loadData()
    const currentUser = data?.user?.display

    const handleLogout = async () => {
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
                <Link to="/"><img src={logo} width={150} /></Link>
            </span>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    <li className='text-xl hover:bg-slate-300 p-4 rounded-sm cursor-pointer' onClick={handleLogout}>Log out</li>
                </ul>
            </nav>
        </header>
        <div className='relative p-2'>
        <span className='absolute right-12 italic'>Logged in as <strong>{currentUser}</strong></span>
        </div>
    </div>
  )
}

export default Header
