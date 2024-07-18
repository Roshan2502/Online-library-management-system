import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import FetchBook from './FetchBook'
import Style from './FetchBook.module.css'

const Home = () => {

  return (
    <>
        <Navbar/>
        <h1 className='allbooks'>Information of all the Books</h1>
        <div className={Style.grid} >
            <FetchBook/>
      </div>
    </>
  )
}

export default Home