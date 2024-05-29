import React from 'react'
import pageBg from "../assets/pageBg.png";
import { useNavigate } from "react-router-dom";
const SuccessRegisteration = () => {
  return (
    <div>
         <div className="relative w-full lg:h-[1000px] flex flex-col items-center  gap-[100px] text-white ">
        <img
          className="absolute w-full h-full opacity-20 -z-10"
          src={pageBg}
          alt="bg"
        />
        <div className='flex flex-col items-center justify-center gap-[20px] lg:p-[100px] p-[50px] m-[50px] border-[4px] border-green bg-black'>
          <h2 className='font-semibold lg:text-[24px] text-center text-[20px]'>Registeration Successful</h2>
          <p className='lg:text-[20px] text-center'>Thank you for registering! Congratulations! Please check your email for confirmation and further instructions. </p>
        </div>
        </div>
    </div>
  )
}

export default SuccessRegisteration