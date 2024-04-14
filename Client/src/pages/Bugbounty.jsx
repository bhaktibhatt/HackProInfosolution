import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
import { NavLink } from 'react-router-dom';
const BugBounty = () => {
  return (
    <div className='w-full'>
            <div className='relative'>
                <img className='rotate-180 w-full h-2/4' src={Bg} alt="bannertop" />
                <h1 className='absolute text-[35px] lg:text-[90px] font-semibold top-[48px] left-[10px] lg:top-[288px] lg:left-[80px]'>Bug Bounty Hunting </h1>
                <div className='pt-[20px] pb-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[20px] space-y-[40px]'>
                    <p>Our bug bounty course empowers individuals to participate in programs offered by websites, organizations, and software developers, where they can identify and report bugs. Specifically focusing on security exploits and vulnerabilities, participants learn to recognize various types of bugs and their potential impact. Through practical exercises and simulations, students gain hands-on experience in bug hunting and vulnerability reporting.</p>
                    <p>The course covers essential topics such as understanding common security flaws, methodologies for bug discovery, and techniques for effective bug reporting. Participants also delve into the legal and ethical considerations of bug bounty programs, ensuring they operate within ethical boundaries and comply with relevant laws and regulations.</p>
                    <p>Upon completion of the course, participants will be equipped with the skills to actively contribute to bug bounty programs, earning recognition and compensation for their efforts. This training not only enhances technical abilities but also cultivates a sense of responsibility in securing digital systems and applications against potential threats.</p>
                    <p>Click Below to Register</p>
                    <div className='w-full flex items-center justify-center'>
                        <NavLink to="/registrationform" >
                            <button className='border-2 border-purple-500 lg:py-[12px] py-[8px] lg:px-[24px] px-[10px] rounded-[16px] text-[20px] hover:shadow-xl'>Register</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BugBounty