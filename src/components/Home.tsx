import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

// const api_url = 'openmrs/ws/rest/v1/patient?q=Sarah&v=default&limit=1'

interface Result {
    [key: string]: any
}
const Home = () => {
    const [searchParams, setSearchParams] = useState<string>('')
    const [results, setResults] = useState<Result[]>()


    const handleChange = (event: any) => {
        const value = event.target.value;
        setSearchParams(value)
    }

    const userInformation = localStorage.getItem("authenticated")
    if(userInformation !== "true"){
        window.location.href = "/login"
    }

    useEffect(() => {
        let timer: number;
        if(searchParams && searchParams.trim() && searchParams.length > 0) {
            timer = window.setTimeout(() => {
                fetch(`openmrs/ws/rest/v1/patient?q=${searchParams}&v=default&limit=1`, {
                    mode: 'no-cors',
                    method: "GET",
                    redirect: 'follow'
                }).then(res => res.json())
                .then(data => {
                    if(!data) {
                        return
                    } 
                    setResults(data)
                    setSearchParams('')
                })
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [searchParams])

    // if(results) {
    //     console.log(new Date(results?.results[0].person.birthdate).toLocaleDateString())
    //     const convertString = results?.results[0].display.split(' ').slice(2).join()
    //     // const splitString = convertString.split(' ').slice(2).join()
    //     console.log(convertString)
    // }

  return (
    <div>
       <Header />
        <div className='w-[80%] mx-auto pt-4 mb-10'>
            <div className='w-[80%] mx-auto m-4 flex gap-4'>
                <input value={searchParams} onChange={handleChange} className='bg-searchColor font-semi-bold outline-none w-full p-2 text-center text-xl border rounded-sm' type="text" placeholder='Search Patient'/>
                <div className='m-2'>
                <select className='p-4 outline-none'>
                    <option >Name</option>
                    <option>Patient Identifier</option>
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
