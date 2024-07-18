import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Toaster/>
        <Outlet/>
        
    </>
  )
}

export default Layout