import React, { useState } from 'react'
import '../styles/login.scss'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [response , setResponse] = useState({})
  const [formData, setFormData]= useState({
    email:'',
    password:'',
  })
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(formData);
    try{
      const {data}= await axios.post('/login', formData,{
        headers: { "Content-Type":"application/json", "Accept": "application/json"},
      })
      setResponse(data)
      console.log(response)
      if(data.success){
        setFormData({})
        toast.success('User is logged in successfully')
        navigate('/')
      }
    }catch(error){
      console.log(response)
      toast.error(response.message)
    }
  }
  return (
    <main>
      <div className="register-wrapper">
        <div className="register-container">
          <div className="register-content">
            <form action="" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>Enter your Email</label>
                <input placeholder='Enter your Email' name='email' value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})} type="email" />
              </div>
               <div className="input-wrapper">
                <label>Enter your Password</label>
                <input placeholder='Enter your Password' name='password' value={formData.password} onChange={(e)=>setFormData({...formData, password:e.target.value})} type="password" />
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