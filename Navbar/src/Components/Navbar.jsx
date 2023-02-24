import React, { useState } from 'react'
import '../Styles/navbar.scss'
import logo from '../Assets/logo.png'
const Navbar = () => {
    const[toggle,setToggle] = useState(false)
  return (
    <div className="container">
        <div className="nav_wrapper">
            <div className="nav_content">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className={(toggle)?"menu active":"menu inactive"}>
                    <button>Home</button>
                    <button>About us</button>
                    <button>Contact</button>
                    <button>Resume</button>
                </div>
                <div className="mobile">
                <button onClick={()=>{setToggle(!toggle)}}><box-icon name={(toggle)?'x':'menu'}></box-icon></button>
                {/* <box-icon name='x' ></box-icon> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar