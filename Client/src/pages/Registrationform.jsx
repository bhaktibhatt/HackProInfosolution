import React from 'react'
import Bg from '../assets/BackgroundHEX.png'
const Registrationform = () => {
    return (
        <div>
            <div className='relative'>
                <img className='rotate-180 w-full h-2/4' src={Bg} alt="bannertop" />
                <h1 className='absolute text-5xl lg:text-7xl font-semibold top-12 left-10 lg:top-72 lg:left-32'>Register to get Details</h1>
            </div>
            <div className='flex flex-col w-full  px-80'>
                <form id='registrationform'>
                    <div>
                        <h3 className='text-2xl'>Personal Details :</h3>
                        <div className='flex w-full justify-around mt-10 mb-10'>
                            <input id='name-input' className='border rounded-md border-violet-500 p-2 w-72' type="text" placeholder={"Full Name"} required />
                            <input id='email-input' className='border rounded-md border-violet-500 p-2 w-72' type="email" placeholder={"Email ID"} required />
                        </div>
                        <div className='flex w-full justify-around '>
                            <input className='border rounded-md border-violet-500 p-2 w-72' type="tel" pattern="[0-9]{10}" title="10 Digit number only." placeholder={"Contact"} id='contact-input' required />
                            <div className='relative'>
                                <select className='border rounded-md border-violet-500 p-2 pr-12 w-72 appearance-none bg-transparent bg-no-repeat bg-right bg-contain' placeholder={"Courses"} required id="courses-input">
                                    <option value="">--Select course--</option>
                                    <option value="CEH">Ethical Hacking and Cyber Security</option>
                                    <option value="CF">Cyber Forensics</option>
                                    <option value="PT">Pentration Testing</option>
                                    <option value="BB">Bug Bounty</option>
                                    <option value="CN">Computer Network</option>
                                </select>
                                <div className='absolute top-3 right-3 pointer-events-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl pt-10'>Educational Details : </h3>
                        <div className='flex w-full justify-around mt-10 mb-10'>
                            <div className='relative'>
                                <select className='border rounded-md border-violet-500 p-2 pr-12 w-72 appearance-none bg-transparent bg-no-repeat bg-right bg-contain' required id="education-input">
                                    <option value="">--Highest level of education--</option>
                                    <option value="10th">10th</option>
                                    <option value="12th">12th</option>
                                    <option value="UG">Undergraduate</option>
                                    <option value="PG">Graduate</option>
                                </select>
                                <div className='absolute top-3 right-3 pointer-events-none'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                            <input className='border rounded-md border-violet-500 p-2 w-72' type="text" placeholder={"name of institute/university/college/school"} required id='university-input' />
                        </div>
                    </div>
                    <div >
                        <h3>Mode of Instruction :</h3>
                        <div className='flex items-center gap-x-2' >
                            <input type="radio" name="MODE" value={"Online"} /><b>Online</b>
                        </div>
                        <div className='flex items-center gap-x-2'>
                            <input type="radio" name="MODE" value={"Offline"} /><b>Offline</b>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center'>
                        <input type="submit" className='border-2 border-purple-500 py-3 px-6 rounded-2xl text-xl hover:shadow-xl' value={'Register'}/>
                    </div>
                </form>
                {
                    window.onload = function() {

                    }
                }
            </div>
        </div>
    )
}

export default Registrationform