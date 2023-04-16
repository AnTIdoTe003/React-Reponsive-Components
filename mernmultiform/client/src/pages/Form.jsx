import React, { useState } from 'react'
import Signup from '../components/Signup'
import UserDetails from '../components/UserDetails'
import PersonalDetails from '../components/PersonalDetails'
// import Success from '../components/Success'
import axios from 'axios'
const Form = () => {
    const titles = ['Signup', 'PersonalDetails', 'UserDetails']
    const [page, setPage] = useState(0)
    const [formData , setFormData] =  useState({
        username :'',
        email :'',
        password :'',
        confirmPassword :'',
        department:'',
        year:'',
        semester :'',
        crush :'',
    })
    const pageDisplay = ()=>{
        if(page === 0){
            return (<Signup data={formData} setData ={setFormData}></Signup>)
        }else if(page === 1){
            return (<PersonalDetails data={formData} setData ={setFormData}></PersonalDetails>)
        }else if(page === 2){
            return (<UserDetails data={formData} setData ={setFormData}></UserDetails>)
        }
    }

    const RegisterUser=(e)=>{
        e.preventDefault()
        const{data}=axios.get('http://127.0.0.1:3000/test')
        console.log(data)
    }
    
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900'>
        <div className='bg-slate-200 rounded-md py-5  h-auto lg:w-[30%] md:w-[70%] w-[90%] flex flex-col items-center justify-center'>
        <div className='font-semibold text-3xl'>
            {titles[page]}
        </div>
        <div>
            {pageDisplay()}
        </div>
        <div className='flex gap-3'>
        <button className='bg-red-200 text-red-900 w-20 rounded-md h-10' disabled={page===0} onClick={()=>setPage(page-1)}>Prev</button>
        <button className='bg-green-200 text-green-900 w-20 rounded-md h-10' onClick={(e)=>(page===titles.length-1)?RegisterUser(e):setPage(page+1)}>{(page===titles.length-1)?"Submit":"Next"}</button>
        </div>
        </div>
        
        
        
    </div>
  )
}

export default Form