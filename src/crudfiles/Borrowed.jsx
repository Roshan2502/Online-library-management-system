import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from '../axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Borrowed = () => {

    let [userBorrowed, setUserBorrowed] = useState([])
  
    function getData() {
      axios.get("/users")
      .then((response) => {
        // console.log(response);
        setUserBorrowed(response.data)
      })
    }
  
    useEffect(() => {
      getData()
    },[])
  
    let handleDelete = (id) => {
      axios.delete(`/users/${id}`)
      .then((response) => {
        console.log(response);
        getData()
      })
      toast.success("User Deleted Successfully")
    }
  
    return (
        <>
        <Navbar />
      <section className='userBlock'>
        <article className='container'>
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Book Name</th>
                <th>Author</th>
                <th>Due Date</th>
                <th>Transaction Type</th>
              </tr>
            </thead>
            <tbody>
              {
                userBorrowed.map((value) => {
                  return <tr key={value.id}>
                    <td>{value.username}uname</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.contact}</td>
                    <td>{value.bookName}</td>
                    <td>{value.author}</td>
                    <td>{value.dueDate}</td>
                    <td>{value.transactionType}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </article>
      </section>
      </>
    )
  }

export default Borrowed