import logo from '../../public/logo/ampath_Logo.png'
import { Link } from 'react-router-dom'
import {MdLogout} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import storage from '../app/localStorage'

const Header = () => {
  const loggedInUser = storage.loadData()

  const navigate = useNavigate()

  const handleLogout = async () => {
    await fetch('openmrs/ws/rest/v1/session', {
      method: 'DELETE',
      })
      .then(() => {
        localStorage.removeItem('userInformation')
        localStorage.removeItem('authenticated')
        navigate('/login')
      })


  }

  return (
    <div>
         <header className='bg-white shadow-md flex justify-between p-3 items-center'>
            <span className='cursor-pointer ml-3'>
                <Link to="/"><img src={logo} width={180} /></Link>
            </span>
            <nav className='md:mr-12'>
                <ul className='md:flex items-center gap-20'>
                    <li className='text-sm'>Logged in as <span className='uppercase'><strong>{loggedInUser.user.display}</strong></span></li>
                    <li onClick={handleLogout} className='text-lg flex gap-2 items-center hover:shadow-lg hover:bg-slate-300 p-2 rounded-sm cursor-pointer'><MdLogout />Log out</li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header
