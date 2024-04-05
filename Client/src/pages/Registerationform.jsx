import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
const Registerationform = () => {
  return (
    <div>
      <div className='relative'>
      <img className='rotate-180 w-full h-2/4' src={Bg} alt="" />
      <h1 className='absolute text-5xl lg:text-7xl font-semibold top-12 left-10 lg:top-72 lg:left-32'>Register to get Details</h1>
      </div>
      <div className='flex flex-col w-full  px-80'>
        <div>
          <h3 className='text-2xl'>Personal Details:</h3>
          <div className='flex w-full justify-around mt-10 mb-10'>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="text" value={"Full Name"} required/>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="email" value={"email"} required/>
          </div>
          <div className='flex w-full justify-around '>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="text" value={"Contact"} required/>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="email" value={"Courses"} required/>
          </div>
        </div>
        <div>
          <h3 className='text-2xl pt-10'>Educational Details:</h3>
          <div className='flex w-full justify-around mt-10 mb-10'>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="text" value={"highest level of education"} required/>
            <input className='border rounded-md border-violet-500 p-2 w-72' type="email" value={"name of institute/university/college/school"} required/>
          </div>
        </div>
        <div >
          <h3>Mode of Education</h3>
          <div className='flex'>
          <input type="radio" name="Online" value={"Online"} id="" /><b>Online</b>
          </div>
          <div className='flex'>
          <input type="radio" name="Offline" value={"Online"} id="" /><b>Offline</b>
          </div>
        </div>
        <div className='flex items-center w-full justify-center'>
        <button className='border-2 border-purple-500 py-3 px-6 rounded-2xl text-xl hover:shadow-xl'>Register</button>
      </div>
      </div>

    </div>
  )
}

export default Registerationform