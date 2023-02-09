import React from 'react'


const Home = () => {
  return (
    <div>
        <header className='bg-gray-100 flex justify-between p-4'>
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
            <div className='w-[80%] mx-auto m-4'>
                <input className='w-full p-4 text-center text-1xl border border-slate-200 rounded-sm' type="text" placeholder='Search Patient'/>
            </div>
        </div>
    </div>
  )
}

export default Home
