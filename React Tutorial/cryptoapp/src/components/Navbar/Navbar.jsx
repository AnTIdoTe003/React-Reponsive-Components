import React from 'react'
import './style.scss'
const Navbar = () => {
  return (
  <nav>
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-logo"></div>
        <div className="nav-menu">
          <button>Home</button>
          <button>Cryptocurrencies</button>
          <button>Exchanges</button>
          <button>News</button>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar