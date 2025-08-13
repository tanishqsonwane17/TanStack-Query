import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <nav>
        <ul className='flex gap-15 border p-8 border-b-black'>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout