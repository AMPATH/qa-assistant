import logo from '../../public/logo/ampath_Logo.png'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div>
         <header className='bg-white shadow-md flex justify-between p-4 items-center'>
            <span className='cursor-pointer ml-3'>
                <Link to="/"><img src={logo} width={150} /></Link>
            </span>
            <nav className='mr-12'>
                <ul className='flex items-center gap-20'>
                    <li>Logged in as ADMIN</li>
                    <li className='text-xl hover:bg-slate-300 p-4 rounded-sm cursor-pointer'>Log out</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
