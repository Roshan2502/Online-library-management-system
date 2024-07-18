import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from '../axios'
import Style from './FetchBook.module.css'

const AdminFetchBook = () => {
    let [books, setBooks] = useState([]);

    let fetchApi = async () =>{
        let {data}  = await axios.get("http://localhost:3000/getBook");
        setBooks(data)
    }

    console.log(books)

    useEffect( ()=>{
        try {
            fetchApi()
        } catch (error) {
            console.log(error)
        }
    }, [])

  return (
    <>
        {books.map((value, index) => {
            console.log(value)
            return (
                        <div className={Style.card} key={index}>
                            {/* <img src={value.avatar_url} alt="" /> */}
                            <div className={Style.container}>
                                <aside><b>{value.login}</b></aside>
                                <div className={Style.author}>author</div>
                                <div className={Style.availability}>available</div>
                                <input className={Style.btn} type="button" value="Alter Availability" />
                                <input className={Style.btn} type="button" value="Delete" />
                                <div className={Style.line}></div>
                            </div>
                        </div>
            )
        })}
    </>
  )
}

export default AdminFetchBook