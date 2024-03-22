import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
const Footer = () => {
  return (
    <div className='relative w-full'>
      <img className='w-full h-2/4' src={Bg} alt="" />
      <div className='w-full absolute top-1/4'>
        <div className='flex flex-col items-center'>
          <h6 className='text-3xl'>All Rights Reserved By HackPro Infosolution</h6>
          <br/>
          <h6 className='text-2xl'>Made By bhaktibhatt and Pratham-c0des</h6>
        </div>
      </div>

    </div>
  )
}

export default Footer