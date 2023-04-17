import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AllUsers = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        const fetchAllUsers = async()=>{
            try{
                const {data}= await axios.get('/fetchUser')
                setUser(data)
                console.log(data)
            }catch(err){
                console.log(error)
            }
        }
        fetchAllUsers()
    },[])
  return (
    <div className=' px-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black h-screen w-screen text-white font-bold'>
        <p className='py-5'>Users registered</p>
        {
            user.map((ele, item)=>{
                return(
                    <h1>Username {item} : {ele.username}'s</h1>
                    
                )
            })
        }
    </div>
  )
}

export default AllUsers