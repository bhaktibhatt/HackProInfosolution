import React from 'react'
import cardBg from '../assets/card-bg.jpg'
const card = () => {
  return (
    <div className=' w-72 h-3/4 border border-black rounded-3xl'>
      <div className='relative'>
      <img className=' rounded-t-3xl w-72 h-44 ' src={cardBg} alt="" />
      <h2 className='absolute top-12 left-20 text-white text-2xl'>Course title</h2>
      </div>
      <p className='p-2 mb-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, aspernatur? Earum rerum repudiandae dolorum? Reprehenderit sapiente ipsum reiciendis totam quo?</p>
      <p className='p-2 pt-0 text-right' >learn more &gt;&gt;</p>
    </div>
  )
}

export default card