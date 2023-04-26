import React, { useState } from 'react'
import '../styles/register.scss'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [formData, setFormData]= useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const handleSubmit= async(e)=>{
    e.preventDefault()
    // console.log(formData.username)
    const {username, email, password, confirmPassword}= formData
    try{
      const {data} = await axios.post('/register',{
        username, email, password, confirmPassword
      },
      {
        headers: { "Content-Type":"application/json", "Accept": "application/json"},
      })
      if(data.error){
        toast.error(data.error)
      }
      if(data.success){
        setFormData({})
        toast.success('User is registered successfully')
        navigate('/login')
      }
    }catch(error){
      console.log(error)
    }

  }
  return (
    <main>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-content">
            <form action="" onSubmit={handleSubmit}> 
              <div className="input-wrapper">
                <label>Enter your Username</label>
                <input placeholder='Enter your Username' name='username' value={formData.username} onChange={(e)=>setFormData({...formData, username:e.target.value})} type="text" />
              </div>
               <div className="input-wrapper">
                <label>Enter your Email</label>
                <input placeholder='Enter your Email' name='email' value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} type="email" />
              </div>
               <div className="input-wrapper">
                <label>Enter your Password</label>
                <input placeholder='Enter your Password' name='password' value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} type="password" />
              </div>
               <div className="input-wrapper">
                <label>Confirm your password</label>
                <input placeholder='Confirm your password' name='confirmPassword' value={formData.confirmPassword} onChange={(e)=>setFormData({...formData, confirmPassword:e.target.value})} type="password" />
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

export default Register