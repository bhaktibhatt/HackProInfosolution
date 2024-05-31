import React from 'react';
import pageBg from '../assets/pageBg.png'
import { NavLink } from 'react-router-dom';

const Ethicalhacking = () => {
    return (
        <div className='relative w-full text-white'>
                               <div className='absolute inset-0 w-full h-full bg-repeat-y opacity-20 -z-10' style={{ backgroundImage: `url(${pageBg})`, backgroundSize: 'cover' }}></div>

                <div className='flex flex-col items-center justify-center lg:gap-[100px] lg:px-[100px] lg:py-[200px] py-[100px]'>
                <div className='bg-black w-fit border-[4px] border-green lg:px-[100px] px-[40px] lg:py-[20px] lg:m-0 m-[40px]'>
                <h1 className='text-[32px] text-center lg:text-[96px] font-semibold lg:leading-[150px]'>Ethical Hacking <br/>and Cyber Security</h1>
                </div>
                <div className='font-semibold py-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[30px] space-y-[40px]'>
                    <p>Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization.</p>
                    <p>This beginner-friendly course focuses on core basics for someone putting their foot for the first time in cybersecurity and ethical hacking. Concepts like footprinting, networking, DNS, etc., will be covered.</p>
                    <div className='font-semibold space-y-[40px]'>
                    <h3 className='font-bold'>2. Course Curriculum:</h3><p>This course cover a wide range of topics including networking fundamentals, cryptography, malware analysis, penetration testing techniques, incident response, and legal aspects of cyber security.</p>
                    <h3 className='font-bold'>3. Practical Training:</h3><p>Hands-on experience and real-world simulations are integral parts of ethical hacking and cyber security courses. Students learn to use various security tools and technologies in simulated environments to gain practical expertise.</p>
                    <h3 className='font-bold'>4. Career Opportunities:</h3><p>Graduates in this course are in high demand  and are eligible to apply across various industries, including finance, healthcare, government, and technology. They can pursue careers as ethical hackers, security analysts, incident responders, and security consultants.</p>
                        
                        <p className='text-center'>Click Below to Register</p>
                    </div>
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

export default Ethicalhacking