import React from 'react';
import Bg from '../assets/BackgroundHEX.png'
import { NavLink } from 'react-router-dom';

const Ethicalhacking = () => {
  return (
    <div className='w-full'>
      <div className='relative'>
        <img className='rotate-180 w-full h-2/4' src={Bg} alt="" />
        <h1 className='absolute text-5xl lg:text-8xl font-semibold top-12 left-10 lg:top-72 lg:left-20'>Ethical Hacking And Cyber Security</h1>
        <div className='py-20 px-10 lg:pt-10 lg:px-32 lg:text-3xl space-y-10'>
          <p>Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization.</p>
          <p>This beginner-friendly course focuses on core basics for someone putting their foot for the first time in cybersecurity and ethical hacking. Concepts like footprinting, networking, DNS, etc., will be covered.</p>
          <div className='w-full flex items-center justify-center'>
           <NavLink to="/registerationform" >
            <button className='border-2 border-purple-500 py-3 px-6 rounded-2xl text-xl hover:shadow-xl'>Register</button>
            </NavLink> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ethicalhacking