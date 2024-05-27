import React from 'react'
import cardBg from '../assets/card-bg.jpg'
const card = (props) => {
  return (
    <div className='relative lg:h-[350px] lg:w-[400px] w-[290px] h-[280px] p-[20px] lg:p-[24px] flex flex-col items-center gap-[15px] lg:gap-[15px] border border-green rounded-[24px] hover:shadow-2xl lg:scale-90  hover:scale-100 transition-all'>
        <img className='absolute top-0 bottom-0 right-0 left-0 m-auto leading-[15px] rounded-[24px] lg:w-[400px] lg:h-[350px] w-[290px] h-[280px] -z-40 opacity-30' src={props.imageSource} alt="prop image"/>
        <h2 className='w-full font-semibold text-green text-[20px] lg:text-[34px] text-center'>{props.ctitle}</h2>
        <p className='text-[15px] lg:text-[18px] leading-[18px] lg:leading-[24px] '>{props.cdes}</p>
        <p className='font-bold text-[15px]'>learn more &gt;&gt;</p>
      </div>
  )
}

export default card