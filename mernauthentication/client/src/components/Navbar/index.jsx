import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <div className="nav-wrapper">
            <div className="nav-container">
                <div className="nav-content">
                    <Link to ={'/'}><button>Home</button></Link> 
                    <Link to={'/register'}><button>Register</button></Link>
                    <Link to ={'/login'}><button>Login</button></Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar