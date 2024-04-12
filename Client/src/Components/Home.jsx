import React from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "../assets/image.png"
import Marquee from 'react-fast-marquee';
import Card from "./Card.jsx";
import './slickcustom.css';

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


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color:"black"}}
      onClick={onClick}
    />
  );
}
const Home = () =>{
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

    return(
        <div>
            <div className="relative w-full">
                <img className="w-full" src={ image } alt="" />
                <button className="absolute lg:top-2/3 lg:left-[300px] left-[56px] top-[144px] bg-slate-50 py-[4px] px-[8px] lg:px-[24px] lg:py-[16px] rounded-[12px] lg:rounded-[16px] lg:text-[30px] text-violet-900  hover:drop-shadow-xl hover:scale-105 transition-all">Enroll Now</button>
            </div>            
            <div className="lg:m-[80px] m-[40px]">
                    <div className="flex flex-col">
                    <h3 className="py-[40px] text-[30px] lg:text-[50px">Courses:</h3>
                    <div>
                    <Slider {...settings}>
                        <NavLink to="/ethicalhackingandcybersecurity">
                        <Card ctitle="Ethical Hacking & Cyber Security" cdes="Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization."/>
                        </NavLink>
                        <NavLink to="/pentesting">
                        <Card ctitle="Certified Penetration Testing" cdes="Delve into understanding how hackers breach operating systems and circumvent antivirus measures. By adopting hackers' strategies and approaches, you'll uncover vulnerabilities within your network. "></Card>
                        </NavLink>
                        <NavLink to="/cyberforensics">
                        <Card ctitle ="Cyber Forensic Investigation" cdes="Gain in-depth knowledge in the field of Cyber Forensics & Crime.Use investigation tools and techniques for analysis of data to identify evidence, Technical Aspects & Legal Aspects related to cyber crime."></Card>
                        </NavLink>
                        <NavLink to="/bugbounty">
                        <Card ctitle="Certified Bug Bounty Hunting" cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."></Card>
                        </NavLink>
                        <NavLink to="/computernetwork">
                        <Card ctitle="Computer Networks" cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."></Card>
                        </NavLink>
                    </Slider>
                    
                    </div>
                </div>
            <div className="mt-[80px] lg:mt-[160px">
                <h3 className="py-[40px] text-[30px] lg:text-[50px]">Why is Certification Important?</h3>
                <p className="m-0 p-0 text-xl lg:text-3xl">An individual's knowledge, abilities, and expertise in the field of cybersecurity 
            are demonstrated in concrete form by the cybersecurity certification program, which is why it is significant.
             It can assist people progress in their careers at their current companies as well as help them differentiate themselves from other applicants on the job market.
             When recruiting or elevating cybersecurity specialists, employers frequently need or favour certificates.</p>
            </div>
            
             <div className="my-[80px] lg:my-[160px] w-full">
                <h3 className="py-2 text-[30px] lg:text-[50px]">Tools You Learn -</h3>
                <div className="w-full space-y-[56px]">
                    <div className="flex justify-around items-center flex-wrap gap-[20px] lg:gap-[20px]">
                        <img className=" lg:p-[10px] h-[40px] lg:h-28" src={aircrack} alt="aircrack" />
                        <img className=" lg:p-[10px] h-[40px] lg:h-28" src={nmap} alt="nmap" />
                        <img className=" lg:p-[10px] h-[40px] lg:h-28" src={burpsuite} alt="burpsuite" />
                        <img className=" lg:p-[10px] h-[40px] lg:h-28" src={wireshark} alt="wireshark" />   
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={M} alt="M" />
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={nikto} alt="nikto" />
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={threehead} alt="dragon" />
                        <img className=" lg:p-[10px] h-[40px] lg:h-[60px]" src={hashcat} alt="hashcat" />
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={SETK} alt="setk" />
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={beef} alt="beef" />
                        <img className=" lg:p-[10px] h-[60px] lg:h-28" src={green} alt="green" />
                        <img className=" lg:p-[10px] h-[70px] lg:h-28" src={kali} alt="kali" />  
                    </div>
                </div>
             </div>
             <div className="w-full flex flex-col items-center my-[56px] lg:my-[128px]">
                <h3 className="pb-[56px] pt-[40px] text-[30px] lg:[50px]">Accreditations</h3>
                <div className="w-full rounded-[12px] space-y-[56px] gradient">
                    <Marquee speed={20} autoFill behavior="" direction="left"> 
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={ISO} alt="setk" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={MSME} alt="beef" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={skillindia} alt="green" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={CNI} alt="kali" />  
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={ASNI} alt="kali" />  
                    </Marquee>
                    <Marquee speed={20} autoFill behavior="" direction="right">
                    <div className="flex items-center ">
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={DigitalIndia} alt="setk" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={UKAC} alt="beef" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={QRO} alt="green" />
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={iqcs} alt="kali" />  
                        <img className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]" src={IAF} alt="kali" />  
                    </div>
                    </Marquee>
                </div>
             </div>
        </div>
        </div>

    )
}
export default Home