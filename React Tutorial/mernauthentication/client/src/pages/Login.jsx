import React, { useState } from 'react'
import '../styles/login.scss'
const Login = () => {
  const [formData, setFormData]= useState({
    username:'',
    email:'',
  })
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <main>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-content">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-wrapper">
                <label htmlFor="">Enter your Username</label>
                <input onChange={(e)=>setFormData({...formData, username:e.target.value})} type="text" />
              </div>
               <div className="input-wrapper">
                <label htmlFor="">Enter your Password</label>
                <input onChange={(e)=>setFormData({...formData, password:e.target.value})} type="password" />
              </div>
              <div className="input-wrapper">
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login