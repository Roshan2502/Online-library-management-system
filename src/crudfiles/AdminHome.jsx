import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Style from './FetchBook.module.css'
import AdminFetchBook from './AdminFetchBook'

const AdminHome = () => {

  return (
    <>
        <Navbar/>
        <h1 className='allbooks'>Information of all the Books</h1>
        <div className={Style.grid} >
            <AdminFetchBook/>
      </div>
    </>
  )
}

export default AdminHome