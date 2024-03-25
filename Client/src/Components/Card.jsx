import React from 'react'
import cardBg from '../assets/card-bg.jpg'
const card = (props) => {
  return (
    <div className=' w-72 h-96 border border-black rounded-3xl'>
      <div className='relative'>
        <img className=' rounded-t-3xl w-72 h-44 ' src={cardBg} alt="" />
        <h2 className='w-full absolute top-12 text-white text-3xl text-center'>{props.ctitle}</h2>
      </div>
      <p className='p-2 mb-0'>{props.cdes}</p>
      <p className='font-bold p-2 pt-0 text-right'>learn more &gt;&gt;</p>
    </div>
  )
}

export default card