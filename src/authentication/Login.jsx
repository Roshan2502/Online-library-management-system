import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import Navbar from '../crudfiles/Navbar'

const Login = () => {

    let navigate = useNavigate()

    let [loginData, setLoginData] = useState({
        email: "",
        password: "",
        token: uuidv4()
    })

    let {email, password, token} = loginData

    let handleChange = (e) => {
        let {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }

    let handleSubmit = async (e) => {
        e.preventDefault()
        let {data} = await axios.get("http://localhost:5000/registeruser")
        let filterData = data.filter((emp) => {
            return (
                emp.email === loginData.email && emp.password === loginData.password
            )
        })
        if(filterData.length > 0){
            navigate('/adminhome')
            localStorage.setItem("TOKEN", token)
            toast.success("Successfully Logged in")
        } else {
            navigate('/')
            toast.error("Invalid Credentials")
        }
    }

  return (
    <>
    <Navbar/>
    <main className='formcontainer'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder='Enter your email' value={email} onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder='Enter your password' value={password} onChange={handleChange} />
            </div>

            <div className="form-group">
                <button>Login</button>
            </div>
        </form>
    </main>
    </>
    
  )
}

export default Login