import React, { useState } from 'react'
import '../styles/register.scss'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [response , setResponse] = useState({})
  const [registerData, setRegisterData]= useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const createUser= async(e)=>{
    e.preventDefault()
    // console.log(registerData.name)
    try{
      const {data} = await axios.post('/register',registerData,
      {
        headers: { "Content-Type":"application/json", "Accept": "application/json"},
      })
      setResponse(data)
      // if(data.error){
      //   console.log(data)
      // }
      if(data.created){
        setRegisterData({})
        toast.success('User is registered successfully')
        navigate('/login')
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
            <form action="" onSubmit={createUser}> 
              <div className="input-wrapper">
                <label>Enter your name</label>
                <input placeholder='Enter your name' name='name' value={registerData.name} onChange={(e)=>setRegisterData({...registerData, name:e.target.value})} type="text" />
              </div>
               <div className="input-wrapper">
                <label>Enter your Email</label>
                <input placeholder='Enter your Email' name='email' value={registerData.email} onChange={(e)=>setRegisterData({...registerData, email:e.target.value})} type="email" />
              </div>
               <div className="input-wrapper">
                <label>Enter your Password</label>
                <input placeholder='Enter your Password' name='password' value={registerData.password} onChange={(e)=>setRegisterData({...registerData, password:e.target.value})} type="password" />
              </div>
               <div className="input-wrapper">
                <label>Confirm your password</label>
                <input placeholder='Confirm your password' name='confirmPassword' value={registerData.confirmPassword} onChange={(e)=>setRegisterData({...registerData, confirmPassword:e.target.value})} type="password" />
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