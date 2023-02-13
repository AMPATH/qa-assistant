import React from 'react'
import storage from '../app/localStorage'
import logo from '../../public/logo/ampath_Logo.png'

const Header = () => {
    console.log(storage.loadData())
  return (
    <div>
         <header className='bg-gray-100 flex justify-between p-4 items-center'>
            <a className=''>
                <img src={logo} width={200} />
            </a>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    <li>Log out</li>
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