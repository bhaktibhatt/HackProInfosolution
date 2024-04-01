import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
const Registerationform = () => {
  return (
    <div>
      <div className='relative'>
      <img className='rotate-180 w-full h-2/4' src={Bg} alt="" />
      <h1 className='absolute text-5xl lg:text-7xl font-semibold top-12 left-10 lg:top-72 lg:left-32'>Register to get Details</h1>
      </div>
      <div>
        <div className='flex flex-col w-full'>
          <h3>Personal Details:</h3>
          <div className='flex'>
            <input type="text" value={"Full Name"} required/>
            <input type="email" value={"email"} required/>
          </div>
          <div className='flex'>
            <input type="text" value={"Contact"} required/>
            <input type="email" value={"Courses"} required/>
          </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Registerationform