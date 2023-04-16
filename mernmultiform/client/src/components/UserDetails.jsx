import React from 'react'

const UserDetails = ({data,setData}) => {
  return (
    <div>
        <div className='flex flex-col gap-3 py-3'>
          <label htmlFor="">Tell your crush name</label>
          <input onChange={(e)=>setData({...data, crush:e.target.value})} value={data.crush} type="text" className=' border-gray-400 border rounded-lg w-[20vw] lg-w-[20vw] py-4 px-2' />
        </div>
    </div>
  )
}

export default UserDetails