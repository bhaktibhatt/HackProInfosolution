import React from "react";
import { NavLink } from "react-router-dom";

import image from "../assets/image.png"
import Marquee from 'react-fast-marquee';
import Card from "./Card.jsx";

import aircrack from "../assets/aircrack.png"
import nmap from "../assets/nmap.png"
import burpsuite from "../assets/burpsuite.png"
import wireshark from "../assets/wireshark.png"

import M from "../assets/M.png"
import nikto from "../assets/nikto.png"
import threehead from "../assets/threehead.png"
import hashcat from "../assets/hashcat.png"

import SETK from "../assets/SETK.png"
import beef from "../assets/beef.png"
import green from "../assets/green.png"
import kali from "../assets/kali.png"


import ISO from "../assets/ISO.png"
import MSME from "../assets/MSME.png"
import skillindia from "../assets/SkillIndia.png"
import CNI from "../assets/CNI.png"
import ASNI from "../assets/ASNI.png"

import DigitalIndia from "../assets/DigitalIndia.png"
import UKAC from "../assets/UKAC.png"
import QRO from "../assets/QRO.png"
import iqcs from "../assets/iqcs.png"
import IAF from "../assets/IAF.png"

const Home = () =>{

    return(
        <div>
            <div className="relative w-full">
                <img className="w-full h-3/4" src={ image } alt="" />
                <button className="absolute top-2/3 left-72 bg-slate-50 px-6 py-4 rounded-2xl text-3xl text-violet-900  hover:drop-shadow-xl hover:scale-105 transition-all">Enroll Now</button>
            </div>            
            <div className="m-20">
                    <div className="flex flex-col">
                    <h3 className="py-10 text-5xl">Courses:</h3>
                    <div>
                    <div className="w-100 flex justify-around">
                        <NavLink to="/HackProInfosolution/ehticalhackingandcybersecurity">
                        <Card ctitle="Ethical Hacking & Cyber Security" cdes="Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization."/>
                        </NavLink>
                        <Card ctitle="Certified Penetration Testing" cdes="Delve into understanding how hackers breach operating systems and circumvent antivirus measures. By adopting hackers' strategies and approaches, you'll uncover vulnerabilities within your network. "></Card>
                        <Card ctitle ="Cyber Forensic Investigation" cdes="Gain in-depth knowledge in the field of Cyber Forensics & Crime.Use investigation tools and techniques for analysis of data to identify evidence, Technical Aspects & Legal Aspects related to cyber crime."></Card>
                    </div>
                    <div className="w-100 flex justify-center mt-20 space-x-24">
                        <Card ctitle="Certified Bug Bounty Hunting" cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."></Card>
                        <Card ctitle="Computer Networks" cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."></Card>
                    </div>
                    </div>
                </div>
            <div className="mt-40">
                <h3 className="py-10 text-5xl">Why is Certification Important?</h3>
                <p className="m-0 p-0 text-3xl">An individual's knowledge, abilities, and expertise in the field of cybersecurity 
            are demonstrated in concrete form by the cybersecurity certification program, which is why it is significant.
             It can assist people progress in their careers at their current companies as well as help them differentiate themselves from other applicants on the job market.
             When recruiting or elevating cybersecurity specialists, employers frequently need or favour certificates.</p>
            </div>
            
             <div className="my-40">
                <h3 className="py-20 text-5xl">Tools You Learn -</h3>
                <div className=" space-y-14">
                    <div className="flex justify-around w-full">
                        <img src={aircrack} alt="aircrack" />
                        <img src={nmap} alt="nmap" />
                        <img className="h-28" src={burpsuite} alt="burpsuite" />
                        <img src={wireshark} alt="wireshark" />   
                    </div>
                    <div className="w-full flex justify-around">
                        <img src={M} alt="M" />
                        <img className="h-28" src={nikto} alt="nikto" />
                        <img src={threehead} alt="dragon" />
                        <img className="h-20" src={hashcat} alt="hashcat" />
                    </div>
                    <div className="flex justify-around w-full">
                        <img className=" h-40 " src={SETK} alt="setk" />
                        <img className="h-40" src={beef} alt="beef" />
                        <img className=" h-40 " src={green} alt="green" />
                        <img className="h-40" src={kali} alt="kali" />  
                    </div>
                </div>
             </div>
             <div className="w-full flex flex-col items-center my-32 gradient">
                <h3 className="pb-14 pt-20 text-5xl">Accreditations</h3>
                <div className="w-full rounded-xl space-y-14">
                    <Marquee speed={20} autoFill behavior="" direction="left"> 
                        <img className="h-32 mx-10" src={ISO} alt="setk" />
                        <img className="h-32 mx-10" src={MSME} alt="beef" />
                        <img className="h-32 mx-10" src={skillindia} alt="green" />
                        <img className="h-32 mx-10" src={CNI} alt="kali" />  
                        <img className="h-32 mx-10" src={ASNI} alt="kali" />  
                    </Marquee>
                    <Marquee speed={20} autoFill behavior="" direction="right">
                    <div className="flex items-center ">
                        <img className="h-32 mx-10" src={DigitalIndia} alt="setk" />
                        <img className="h-32 mx-10" src={UKAC} alt="beef" />
                        <img className="h-32 mx-10" src={QRO} alt="green" />
                        <img className="h-32 mx-10" src={iqcs} alt="kali" />  
                        <img className="h-32 mx-10" src={IAF} alt="kali" />  
                    </div>
                    </Marquee>
                </div>
             </div>
        </div>
        </div>

    )
}
export default Home