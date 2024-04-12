import React from 'react'
import cardBg from '../assets/card-bg.jpg'
const card = (props) => {
  return (
    <div className='w-[270px] lg:w-[300px]  h-[390px] border border-gray-400 rounded-3xl hover:shadow-2xl  hover:scale-105 transition-all'>
      <div className='relative'>
        <img className=' rounded-t-3xl w-[100%] h-44 ' src={cardBg} alt="" />
        <h2 className='p-2 w-full absolute top-12 text-white text-[30px] text-center'>{props.ctitle}</h2>
      </div>
      <p className='p-2 mb-0'>{props.cdes}</p>
      <p className='font-bold p-2 pt-0 text-right'>learn more &gt;&gt;</p>
    </div>
  )
}

export default card