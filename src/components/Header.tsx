import logo from '../../public/logo/ampath_Logo.png'
import { Link } from 'react-router-dom'
import {MdLogout} from 'react-icons/md'

const Header = () => {

  return (
    <div>
         <header className='bg-white shadow-md flex justify-between p-4 items-center'>
            <span className='cursor-pointer ml-3'>
                <Link to="/"><img src={logo} width={180} /></Link>
            </span>
            <nav className='md:mr-12'>
                <ul className='md:flex items-center gap-20'>
                    <li className='text-sm'>Logged in as <strong>ADMIN</strong></li>
                    <li className='text-lg flex gap-2 items-center hover:bg-slate-300 p-2 rounded-sm cursor-pointer'><MdLogout />Log out</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
