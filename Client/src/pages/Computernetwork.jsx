import React from 'react'
import pageBg from '../assets/pageBg.png'
import { NavLink } from 'react-router-dom';
const Computernetwork = () => {
  return (
    <div className='relative text-white w-full'>
                <img className='absolute w-full h-full opacity-20 -z-10' src={pageBg} alt="bannertop" />
                <div className='flex flex-col items-center justify-center gap-[100px] lg:px-[100px] lg:py-[200px] py-[100px]'>
                <div className='bg-black w-fit border-[4px] border-green lg:px-[40px] lg:py-[20px] px-[10px] py-[20px] lg:m-0 mx-[40px]'>
                    <h1 className='text-[32px] text-center lg:text-[96px] font-semibold '>Computer Network</h1>
                </div>
                <div className='py-[80px] px-[40px] lg:pt-[40px] lg:px-[128px] lg:text-[30px] space-y-[40px] font-medium'>
                    <p>This computer networking course is designed to provide students with comprehensive knowledge and skills in network architecture, protocols, and topologies, covering both wired and wireless technologies such as LANs, WANs, and WLANs. Students will gain hands-on experience with configuring and managing network devices, including routers, switches, and firewalls, using industry-standard tools and software. The curriculum emphasizes IP addressing, subnetting, routing, switching, and the OSI and TCP/IP models. Advanced topics include network security, VPNs, network monitoring, and implementing security policies, ensuring students can design, implement, and manage robust and secure computer networks.</p>
                    <h3 className='font-bold'>1. Purpose and Importance:</h3><p>Penetration testing is crucial for organizations to proactively identify weaknesses in their security defenses before malicious attackers exploit them. By conducting simulated attacks, professionals in this field help enhance the resilience of systems and networks against cyber threats.</p>
                    <h3 className='font-bold'>2. Course Curriculum:</h3><p>The curriculum of this computer networking course covers a wide range of essential topics, including network architecture, protocols, and topologies. Students will delve into both wired and wireless technologies, such as LANs, WANs, and WLANs, and gain practical experience in configuring and managing network devices like routers, switches, and firewalls. Fundamental concepts such as IP addressing, subnetting, routing, and switching are thoroughly explored, along with in-depth discussions on the OSI and TCP/IP models. Advanced subjects include network security, VPNs, network monitoring, and the implementation of security policies. Through practical projects and lab exercises, students will apply their theoretical knowledge to real-world scenarios, ensuring they develop the skills needed to design, implement, and manage secure computer networks effectively.</p>
                    <h3 className='font-bold'>3. Practical Training:</h3><p>Practical projects and lab exercises are an integral part of this computer networking course, allowing students to apply theoretical knowledge in real-world scenarios and gain hands-on experience with network configuration, troubleshooting, and security implementation. These exercises will cover essential topics such as network architecture, protocols, topologies, IP addressing, subnetting, routing, switching, and the OSI and TCP/IP models. Additionally, students will engage with advanced concepts like network security, VPNs, network monitoring, and implementing security policies, ensuring they can design, implement, and manage robust and secure computer networks.</p>
                    <h3 className='font-bold'>4. Career Opportunities:</h3><p>By completing this computer networking course, students are equipped with the skills necessary to design, implement, and manage robust computer networks, thereby preparing them for careers in network engineering, administration, and cybersecurity.</p>
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

export default Computernetwork