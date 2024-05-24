import React from 'react'
import pageBg from '../assets/pageBg.png'
import { NavLink } from 'react-router-dom';
const Cyberforensics = () => {
  return (
    <div className='relative text-white w-full'>
                <img className='absolute w-full h-full opacity-20 -z-10' src={pageBg} alt="bannertop" />
                <div className='flex flex-col items-center justify-center gap-[100px] lg:px-[100px] lg:py-[200px] py-[100px]'>
                <div className='bg-black w-fit border-[4px] border-green lg:px-[40px] lg:py-[20px] px-[10px] py-[20px] lg:m-0 mx-[40px]'>
                    <h1 className='text-[32px] text-center lg:text-[96px] font-semibold '>Cyber Forensics<br/>Investigation</h1>
                </div>
                <div className='py-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[30px] space-y-[40px] font-medium'>
                    <p>Cyber forensics, also known as digital forensics, is a specialized field focused on investigating cybercrimes by collecting, analyzing, and preserving digital evidence. This course provides students with the necessary skills and knowledge to navigate the complexities of cyber investigations effectively.</p>
                    <h3 className='font-bold'>1. Purpose and Importance:</h3><p>Cyber forensics is crucial because it enables the investigation and resolution of cybercrimes by collecting, analyzing, and preserving digital evidence. It supports legal proceedings by providing admissible evidence, enhances cybersecurity by identifying and mitigating threats, ensures compliance with regulations, and aids in data recovery. Additionally, cyber forensics plays a key role in combating fraud, protecting intellectual property, and safeguarding national security, making it an indispensable tool in maintaining the integrity and security of digital information and systems.</p>
                    <h3 className='font-bold'>2. Course Curriculum:</h3><p>TThe curriculum encompasses forensic techniques and tools essential for digital evidence collection and analysis. Students gain proficiency in using specialized software and hardware, including recovery tools like Autopsy, CDR analysis for Online Crime Reporting, and dedicated tools for Computer Forensics and Mobile Forensics, to extract and interpret data from electronic devices.</p>
                    <h3 className='font-bold'>3. Practical Training:</h3><p>Hands-on exercises and case studies allow students to apply theoretical knowledge to real-world scenarios. They practice conducting forensic examinations, documenting findings, and presenting evidence in a court of law.</p>
                    <h3 className='font-bold'>4. Career Opportunities:</h3><p>Graduates of cyber forensics courses can pursue careers as digital forensic analysts, cybersecurity investigators, incident responders, or consultants in law enforcement agencies, government organizations, private companies, or cybersecurity firms</p>
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

export default Cyberforensics