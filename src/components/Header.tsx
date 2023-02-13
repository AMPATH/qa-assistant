import React from 'react'

const Header = () => {
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
    </div>
  )
}

export default Header