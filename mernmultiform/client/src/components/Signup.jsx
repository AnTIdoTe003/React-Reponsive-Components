import React from 'react'
// import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
const Signup = ({data, setData}) => {
  // const [showPassword, setShowPassword] = useState(false)
  return (
    <div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">UserName</label>
          <input onChange={(e)=>setData({...data, username:e.target.value})} value={data.username} type="text" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">E-mail</label>
          <input onChange={(e)=>setData({...data, email:e.target.value})} value={data.email} type="email" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Password</label>
          <input onChange={(e)=>setData({...data, password:e.target.value})} value={data.password} type="text" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Confirm Password</label>
          <input onChange={(e)=>setData({...data, confirmPassword:e.target.value})}  type="text" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
     
    </div>
  )
}

export default Signup