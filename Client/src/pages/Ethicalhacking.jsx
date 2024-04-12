import React from 'react';
import Bg from '../assets/BackgroundHEX.png'
import { NavLink } from 'react-router-dom';

const Ethicalhacking = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img className='rotate-180 w-full h-2/4' src={Bg} alt="" />
                <h1 className='absolute text-[50px] lg:text-[96px] font-semibold top-[48px] left-40px lg:top-[288px] lg:left-[80px'>Ethical Hacking And Cyber Security</h1>
                <div className='py-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[30px] space-y-[40px]'>
                    <p>Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization.</p>
                    <p>This beginner-friendly course focuses on core basics for someone putting their foot for the first time in cybersecurity and ethical hacking. Concepts like footprinting, networking, DNS, etc., will be covered.</p>
                    <div className='w-full flex items-center justify-center'>
                        <NavLink to="/registrationform" >
                            <button className='border-2 border-purple-500 py-[12px] px-[24px] rounded-[16px] text-[20px] hover:shadow-xl'>Register</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ethicalhacking