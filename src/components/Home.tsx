import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import storage from '../app/localStorage'
// const api_url = 'openmrs/ws/rest/v1/patient?q=Sarah&v=default&limit=1'

interface Result {
    [key: string]: any
}
const Home = () => {
    const [searchParams, setSearchParams] = useState<string>()
    const [results, setResults] = useState<Result[]>()


    const handleChange = (event: any) => {
        const value = event.target.value;
        setSearchParams(value)
    }

    const userInformation = localStorage.getItem("authenticated")
    if(userInformation!=="true"){
        window.location.href = "/login"
    }

    useEffect(() => {
        let timer: number;
        if(searchParams) {
            timer = window.setTimeout(() => {
                fetch(`openmrs/ws/rest/v1/patient?q=${searchParams}&v=default&limit=1`, {
                    mode: 'no-cors',
                    method: "GET",
                    redirect: 'follow'
                }).then(res => res.json())
                .then(data => setResults(data as Result[]))
            }, 5000)
        }
        return () => clearTimeout(timer)
    }, [searchParams])

   console.log(results)
const logoutSession = () =>{
    storage.removeData("authenticated");
    storage.removeData("userInformation");
    window.location.href = "/login"
}
  return (
    <div>
        <header className='bg-gray-100 flex justify-between p-6'>
            <a className='ml-8'>QA assistant</a>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    <li>Home</li>
                    <li>Active Orders</li>
                    <li onClick={logoutSession}>Logout</li>
                </ul>
            </nav>
        </header>

        <div className='w-[80%] mx-auto'>
            <div className='w-[80%] mx-auto m-4 flex gap-4'>
                <input value={searchParams} onChange={handleChange} className='bg-searchColor font-semi-bold outline-none w-full p-2 text-center text-xl border rounded-sm' type="text" placeholder='Search Patient'/>
                <div className='m-2'>
                <select className='p-4'>
                    <option >Name</option>
                    <option >UUID</option>
                    <option>Age</option>
                    <option>CC number</option>
                </select>
                </div>
            </div>
        </div>
        <div className='w-[80%] mx-auto mt-32'>
            <div></div>
            <div className='flex mx-auto w-[90%] justify-between rounded-md bg-slate-200 p-4'>
                <div>Name</div>
                <div>Age</div>
                <div>Gender</div>
                <div>Date of birth</div>
            </div>
            <div className='flex mx-auto w-[90%] justify-between p-4 cursor-pointer mt-1'>
                {results ? (
                    <>
                   <Link to={`${results?.results[0]?.person.uuid}`}>
                   <div className='hover:text-blue-600'>{results?.results[0]?.display.split(' ').slice(2).join(' ')}</div>
                   </Link>
                    <div>{results?.results[0]?.person.age}</div>
                    <div>{results?.results[0]?.person?.gender}</div>
                    <div>{results?.results[0]?.person.birthdate && new Date(results?.results[0]?.person.birthdate).toLocaleDateString()}</div>
                   </> 
                ) : (
                    <p>Search a patient!!</p>
                )}
            </div>
        </div>
    </div>
  )
}

export default Home
