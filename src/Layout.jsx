import React from 'react'
import { Link, Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
    <nav>
        <ul className='flex gap-5'>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default Layout