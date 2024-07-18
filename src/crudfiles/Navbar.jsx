import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate()

  let token = localStorage.getItem('TOKEN')
  
  let handleLogout = () => {
    localStorage.removeItem('TOKEN')
    navigate('/login')
  }

  return (
    <nav>
      <div>
        <Link to='/'>
          <span className='library'>Library</span>
          <span className='management'>Management</span>
        </Link>
     </div>
      

        {
          token ? (
            <button onClick={handleLogout} className='logoutbtn'>Logout</button>
          ) : (
            <div className="login">
              <Link to='/borrowed'>User Book Borrowed</Link>
              <Link to='/login'>Admin Login</Link>
            </div>
          )
        }

    </nav>
  )
}

export default Navbar