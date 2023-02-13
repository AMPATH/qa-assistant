import React from 'react'
import storage from '../app/localStorage'
import logo from '../../public/logo/ampath_Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const data = storage.getData('user')
    // console.log(data)
  return (
    <div>
         <header className='bg-gray-100 flex justify-between p-4 items-center'>
            <span className='cursor-pointer ml-3'>
                <Link to="/"><img src={logo} width={150} /></Link>
            </span>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    <li className='text-xl hover:bg-slate-300 p-4 rounded-sm cursor-pointer'>Log out</li>
                </ul>
            </nav>
        </header>
        <div className='relative p-2'>
        <span className='absolute right-8 italic'>Logged in as <strong>Admin</strong></span>
        </div>
    </div>
  )
}

export default Header