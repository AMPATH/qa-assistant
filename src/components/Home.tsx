import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
interface Result {
    [key: string]: any
}
const Home = () => {
    const [searchParams, setSearchParams] = useState<string>()
    const [results, setResults] = useState<Result[]>()
    const navigate = useNavigate()

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

  return (
    <div>
        <header className='bg-gray-100 flex justify-between p-6'>
            <a className='ml-8'>QA assistant</a>
            <nav className='mr-12'>
                <ul className='flex gap-20'>
                    <li>Home</li>
                    <li>Active Orders</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </header>

        <div className='w-[80%] mx-auto'>
            <div className='w-[80%] mx-auto m-4 flex gap-4'>
                <input value={searchParams} onChange={handleChange} className='w-full p-4 text-center text-xl border border-slate-200 rounded-sm' type="text" placeholder='Search Patient'/>
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
    </div>
  )
}

export default Home
