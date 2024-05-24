import React from 'react'
import pageBg from '../assets/pageBg.png'
const About = () => {
  return (
    
      <div className='relative text-white'>
        <img className='absolute w-full h-full opacity-20 -z-10'  src={pageBg} alt="" />
        <div className='flex flex-col items-center justify-center gap-[100px] lg:px-[100px] lg:py-[200px] py-[100px]'>
        <div className='bg-black w-fit border-[4px] border-green px-[40px] lg:py-[20px]'>
        <h1 className='text-[32px] text-center lg:text-[96px] font-semibold '>About Us</h1>
        </div>
        <div className='mx-[40px] lg:mx-[176px] w-auto text-center lg:text-[24px] space-y-[40px] lg:space-y-[112px]'>
          <p className=''>At HackPro InfoSolutions, we believe that cybersecurity is not just a necessity but a fundamental right in today's digital age. With the increasing prevalence of cyber attacks, it's crucial for individuals and businesses to stay ahead of potential threats. That's where we come in.</p>
          <p className=''>Our team comprises seasoned cybersecurity professionals and ethical hackers who are passionate about sharing their expertise and insights with aspiring cybersecurity enthusiasts. With years of experience in the field, we understand the ever-evolving landscape of cybersecurity and tailor our courses to equip you with practical, real-world skills. Whether you're a beginner looking to start your journey in cybersecurity or a seasoned professional seeking advanced training, we have a wide range of courses to cater to your needs. From ethical hacking and digital forensics to network security and cryptography, our comprehensive curriculum covers various aspects of cybersecurity to ensure you're </p>
          <p>Check out our courses <span className='text-green'>here</span></p>
        </div>
        </div>
      </div>
    
  )
}

export default About