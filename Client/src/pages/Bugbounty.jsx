import React from 'react'
import pageBg from '../assets/pageBg.png'
import { NavLink } from 'react-router-dom';
const BugBounty = () => {
  return (
            <div className='relative text-white'>
                <div className='absolute inset-0 w-full h-full bg-repeat-y opacity-20 -z-10' style={{ backgroundImage: `url(${pageBg})`, backgroundSize: 'cover' }}></div>
                <div className='flex flex-col items-center justify-center gap-[100px] lg:px-[100px] lg:py-[200px] py-[100px]'>
                <div className='bg-black w-fit border-[4px] border-green lg:px-[40px] lg:py-[20px] px-[10px] py-[20px] lg:m-0 mx-[40px]'>
                    <h1 className='text-[32px] text-center lg:text-[96px] font-semibold '>Bug Bounty Hunting</h1>
                </div>
                <div className='pt-[20px] pb-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[24px] space-y-[40px]'>
                    <p>Our bug bounty course empowers individuals to participate in programs offered by websites, organizations, and software developers, where they can identify and report bugs. Specifically focusing on security exploits and vulnerabilities, participants learn to recognize various types of bugs and their potential impact. Through practical exercises and simulations, students gain hands-on experience in bug hunting and vulnerability reporting.</p>
                    <p>The course covers essential topics such as understanding common security flaws, methodologies for bug discovery, and techniques for effective bug reporting. Participants also delve into the legal and ethical considerations of bug bounty programs, ensuring they operate within ethical boundaries and comply with relevant laws and regulations.</p>
                    <p>Upon completion of the course, participants will be equipped with the skills to actively contribute to bug bounty programs, earning recognition and compensation for their efforts. This training not only enhances technical abilities but also cultivates a sense of responsibility in securing digital systems and applications against potential threats.</p>
                    <p className='text-center'>Click Below to Register</p>
                    <div className='w-full flex items-center justify-center'>
                        <NavLink to="/registrationform" >
                            <button className='border-[2px] border-green lg:py-[15px] py-[8px] lg:px-[32px] px-[10px] rounded-[10px] text-[20px] font-semibold bg-green text-black hover:shadow-xl hover:bg-black hover:text-green'>Register</button>
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>
        
  )
}

export default BugBounty