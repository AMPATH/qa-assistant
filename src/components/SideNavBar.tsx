import React from 'react'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'
import {FaWalking, FaRegCalendarAlt} from 'react-icons/fa'
import {BiBandAid} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <div className='hidden md:block absolute bg-white h-screen pl-[2%] shadow-lg'>
        <nav className='mt-20'>
            <ul className='flex flex-col gap-10 text-xl mr-2'>
                <Link to='/patients/:id'>
                <li className='py-2 px-4 flex gap-2 items-center hover:cursor-pointer hover:shadow-md text-blue-300'><AiOutlineInfoCircle /> Patients Info</li>
                </Link>
                <Link to="/orders">
                <li className='py-2 px-4 flex gap-2 items-center hover:cursor-pointer hover:shadow-md'><BsPencilSquare />Orders</li>
                </Link>
                <Link to="#">
                <li className='py-2 px-4 flex gap-2 items-center hover:cursor-pointer hover:shadow-md'><FaWalking />Visits</li>
                </Link>
                <Link to="#">
                <li className='py-2 px-4 flex gap-2 items-center hover:cursor-pointer hover:shadow-md'><BiBandAid />Encounters</li>
                </Link>
                <Link to="#">
                <li className='py-2 px-4 flex gap-2 items-center hover:cursor-pointer hover:shadow-md'><FaRegCalendarAlt />Observations</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default SideNavBar
