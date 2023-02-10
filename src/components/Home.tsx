import React, { useEffect, useState } from 'react'

const api_url = 'http://localhost:8089/openmrs/ws/rest/v1/patient?q=Sarah&v=default&limit=1'

const Home = () => {
    const [searchParams, setSearchParams] = useState()

    const handleChange = (event: any) => {
        const value = event.target.value;
        setSearchParams(value)
    }

    let username = 'admin'
    let password = 'Admin123'

    useEffect(() => {
        const searchData = async () => {
            const result = await fetch(api_url, {
                mode: 'no-cors',
                method: "GET",
                headers: {'Authorization': 'Basic ' + btoa(username +":" +password)},
                redirect: 'follow'
            })
            const data = await result.json()
            console.log(data)
            return data
       }
        // searchData()
    }, [])

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
