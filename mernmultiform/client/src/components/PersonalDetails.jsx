import React from 'react'

const PersonalDetails = ({data, setData}) => {
  return (
    <div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Department Name</label>
          <select onChange={(e)=>setData({...data, department:e.target.value})} value={data.department} className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' name="" id="">
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EE">EE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="BBA">BBA</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Year</label>
          <input onChange={(e)=>setData({...data, year:e.target.value})} value={data.year} type="email" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Semester</label>
          <input onChange={(e)=>setData({...data, semester:e.target.value})} value={data.semester} type="text" className=' border-gray-400 border rounded-lg  w-[20vw] py-4 px-2' />
        </div>
    </div>
  )
}

export default PersonalDetails