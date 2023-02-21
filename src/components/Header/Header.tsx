import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const Header = () => {
    const [Loading,setLoading] = useState(false)
const handleLogout = async () => {
    setLoading(true)
    await fetch("openmrs/ws/rest/v1/session",{
        method:"delete"
    }).then(()=>{
        localStorage.removeItem('userInformation');
<<<<<<< HEAD:src/components/Header.tsx
        localStorage.removeItem('authenticated');

        (async () => {
            await fetch("openmrs/ws/rest/v1/session", {
                    method:"DELETE",
                    redirect: 'follow'
            })
        })()
        window.location.reload();
    }

=======
        localStorage.removeItem('authenticated')
        window.location.href = "/login"
    }  
    )
}
>>>>>>> MarcelRepo/Marcel:src/components/Header/Header.tsx
  return (
    <div>
         <header className='bg-white shadow-md flex justify-between p-4 items-center'>
            <span className='cursor-pointer ml-3'>
            </span>
            <nav className='mr-12'>
<<<<<<< HEAD:src/components/Header.tsx
                <ul className='flex items-center gap-20'>
                    <li>Logged in as ADMIN</li>
=======
                <ul className='flex gap-20'>
                    {Loading && <ClipLoader size = {50} color="white"/>}
>>>>>>> MarcelRepo/Marcel:src/components/Header/Header.tsx
                    <li className='text-xl hover:bg-slate-300 p-4 rounded-sm cursor-pointer' onClick={handleLogout}>Log out</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
