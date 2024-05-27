import React from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


import image from "../assets/image.png";
import Marquee from "react-fast-marquee";
import Card from "./Card.jsx";
import "./slickcustom.css";

import hackingbg from "../assets/hackingbg.png";
import pentestingbg from "../assets/pentestingbg.png";
import investigatebg from "../assets/investigatebg.png";
import locktop from "../assets/locktop.png";
import networkbg from "../assets/networkbg.png";

import aircrack from "../assets/aircrack.png";
import nmap from "../assets/nmap.png";
import burpsuite from "../assets/burpsuite.png";
import wireshark from "../assets/wireshark.png";

import M from "../assets/M.png";
import nikto from "../assets/nikto.png";
import threehead from "../assets/threehead.png";
import hashcat from "../assets/hashcat.png";

import SETK from "../assets/SETK.png";
import beef from "../assets/beef.png";
import green from "../assets/green.png";
import kali from "../assets/kali.png";

import ISO from "../assets/ISO.png";
import MSME from "../assets/MSME.png";
import skillindia from "../assets/SkillIndia.png";
import CNI from "../assets/CNI.png";
import ASNI from "../assets/ASNI.png";

import DigitalIndia from "../assets/DigitalIndia.png";
import UKAC from "../assets/UKAC.png";
import QRO from "../assets/QRO.png";
import iqcs from "../assets/iqcs.png";
import IAF from "../assets/IAF.png";

import passware from "../assets/passware.jpeg";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const comp = useRef(null);
  const animateRef = useRef(null);

  useEffect(() => {
    // Define the animation context
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial state: hide the text and button with blur and offset
      tl.set("#title, #btn", { autoAlpha: 0, x: '-300px', filter: 'blur(20px)' });

      // Animation: move text and button to their original position, remove blur, and fade in with stagger
      tl.to("#title, #btn", {
        delay: 0.3,
        duration: 2.5,
        x: 0,
        filter: 'blur(0px)',
        autoAlpha: 1,
        ease:"power2.inout",// Easing function
        stagger: {
          each: 0.1,
        from: 'right',
        ease: 'power2.inOut',
        
        }, // Stagger the animation start times
      });
    }, comp.current);

    // Clean up the animation context on component unmount
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray(".animate");

    elements.forEach((element, index) => {
      gsap.fromTo(element, 
        {
          autoAlpha: 0,
          y: 50,
          filter: 'blur(10px)'
        }, 
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2, // Stagger animation based on index
        }
      );
    });

  }, []);

  return (
    <div className="text-white flex flex-col lg:gap-[100px]">
      <div className="relative w-full ">
        <img  className="w-full blur-[2px] brightness-[.90]" src={image} alt="hero-img"  />
        <div ref={comp} id="title-btn-container " className="absolute top-0 right-0 left-0 bottom-0 m-auto flex flex-col justify-center items-center gap-[8px]" >
          <h1 id="title" className="text-white font-spaceGrotesk lg:text-[72px] text-[24px] font-semibold">
            HACKPRO INFOSOLUTION
          </h1>
          <NavLink to="/registrationform">
            <button id="btn" className="lg:w-[230px] rounded-lg border-[2px] border-green bg-green text-black font-semibold text-slate py-[4px] px-[8px] lg:px-[24px] lg:py-[16px] lg:text-[30px] hover:drop-shadow-xl hover:text-green hover:bg-black hover:border-[2px] hover:border-green transition-all">
              Enroll Now
            </button>
          </NavLink>
        </div>
      </div>
      <div className="lg:my-[30px] lg:mx-[80px] lg:mt-0 m-[40px]" ref={animateRef}>
        <div className="animate flex flex-col">
          <div className="flex justify-center">
            <h3 id="course" className=" mb-[100px] text-[30px] lg:text-[50px] text-white p-[20px] border-[4px] border-green">
              Our Courses
            </h3>
          </div>
          <div>
            <Slider {...settings}>
              <NavLink to="/ethicalhackingandcybersecurity">
                <Card
                  imageSource={hackingbg}
                  ctitle="Ethical Hacking & Cyber Security"
                  cdes="Ethical Hacking & Cyber security will teach you the latest commercial-grade hacking tools, techniques and methodologies used by hackers and information security professionals to lawfully hack an organization."
                />
              </NavLink>
              <NavLink to="/pentesting">
                <Card
                  imageSource={pentestingbg}
                  ctitle="Certified Penetration Testing"
                  cdes="Delve into understanding how hackers breach operating systems and circumvent antivirus measures. By adopting hackers' strategies and approaches, you'll uncover vulnerabilities within your network. "
                ></Card>
              </NavLink>
              <NavLink to="/cyberforensics">
                <Card
                  imageSource={investigatebg}
                  ctitle="Cyber Forensic Investigation"
                  cdes="Gain in-depth knowledge in the field of Cyber Forensics & Crime.Use investigation tools and techniques for analysis of data to identify evidence, Technical Aspects & Legal Aspects related to cyber crime."
                ></Card>
              </NavLink>
              <NavLink to="/bugbounty">
                <Card
                  imageSource={locktop}
                  ctitle="Certified Bug Bounty Hunting"
                  cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."
                ></Card>
              </NavLink>
              <NavLink to="/computernetwork">
                <Card
                  imageSource={networkbg}
                  ctitle="Computer Networks"
                  cdes="Learn to identify, report, and mitigate software vulnerabilities. Gain recognition and compensation by uncovering security flaws in websites, organizations, and software applications."
                ></Card>
              </NavLink>
            </Slider>
          </div>
        </div>
        <div className="animate relative mt-[80px] lg:mt-[160px] border-[4px] border-green lg:p-[70px] p-[30px]">
          <div className="absolute top-0 right-0 left-0 bottom-0 m-auto flex items-center justify-center -z-30 opacity-30 ">
            <svg
              className="lg:h-[350px] lg:w-[350px] h-[250px] w-[250px]"
              viewBox="0 0 57 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M57 47.2022L56.9891 15.7341L28.4945 0L0 15.7424V47.2022L28.4945 63"
                fill="black"
              />
              <path
                d="M28.3057 9.00879L38.0291 15.0144L43.1904 27.8263L39.145 34.8995L50.4438 39.0367L57 47.2023L28.4946 63.0001L0 47.2023L6.16706 39.0367L17.4663 34.8995L13.4209 27.8263L18.5822 15.0144"
                fill="#0B2B46"
              />
              <path
                d="M28.3057 9.00879L38.0291 15.0144L43.1904 27.8263L39.145 34.8995L50.4438 39.0367L57 47.2023L28.4946 63.0001L0 47.2023L6.16706 39.0367L17.4663 34.8995L13.4209 27.8263L18.5822 15.0144"
                fill="#0B2B46"
              />
              <path
                d="M39.8793 35.1628L42.1083 37.908V44.381L48.2807 39.8354L50.6866 45.5819L51.4193 41.9784L56.9891 47.2023L50.4184 39.0486"
                fill="#0C99AB"
              />
              <path
                d="M16.8701 35.1174L14.6416 37.7352V44.2082L8.46873 39.6626L6.06274 45.4091L5.33013 41.8056L0 47.2022L6.16706 39.0368"
                fill="#0C99AB"
              />
              <path
                d="M13.4502 54.6844L18.7215 48.7122L23.011 54.6844L28.3058 47.0439L33.6001 54.6844L37.8895 48.7122L43.1613 54.6844L28.4945 63"
                fill="#0C99AB"
              />
              <path
                d="M28.3058 19.7852L36.0066 21.6875L40.9238 27.9929L31.0893 41.0809L36.4248 39.1031L39.1451 34.8995L43.1905 27.8263L38.0292 15.0144L28.3058 9.00879L18.5823 15.0144L13.421 27.8263L17.4664 34.8995L20.1863 39.1031L25.5218 41.0809L15.6878 27.9929L20.605 21.6875"
                fill="#0C99AB"
              />
              <path
                d="M3.75812 18.5402V19.1115H4.56777V22.2027H5.27789V18.5402H3.75812Z"
                fill="#47D85F"
              />
              <path
                d="M48.3882 14.2072V14.7785H49.1979V17.8697H49.908V14.2072H48.3882Z"
                fill="#47D85F"
              />
              <path
                d="M12.5032 16.8031C13.4162 16.8031 14.1053 16.1219 14.1053 14.9188C14.1053 13.7156 13.4162 13.0363 12.5032 13.0363C11.5959 13.0363 10.9069 13.7156 10.9069 14.9188C10.9069 16.1219 11.5959 16.8031 12.5032 16.8031ZM12.5032 16.2116C11.9845 16.2116 11.6227 15.8033 11.6227 14.9188C11.6227 14.0343 11.9845 13.6259 12.5032 13.6259C13.0276 13.6259 13.3894 14.0343 13.3894 14.9188C13.3894 15.8033 13.0276 16.2116 12.5032 16.2116Z"
                fill="#47D85F"
              />
              <path
                d="M45.2702 23.4173C46.1832 23.4173 46.8722 22.7361 46.8722 21.5329C46.8722 20.3298 46.1832 19.6504 45.2702 19.6504C44.3629 19.6504 43.6738 20.3298 43.6738 21.5329C43.6738 22.7361 44.3629 23.4173 45.2702 23.4173ZM45.2702 22.8258C44.7514 22.8258 44.3897 22.4174 44.3897 21.5329C44.3897 20.6484 44.7514 20.2401 45.2702 20.2401C45.7946 20.2401 46.1564 20.6484 46.1564 21.5329C46.1564 22.4174 45.7946 22.8258 45.2702 22.8258Z"
                fill="#47D85F"
              />
              <path
                d="M52.6401 23.3669V24.0482H53.6087V27.7491H54.4604V23.3669H52.6401Z"
                fill="#47D85F"
              />
              <path
                d="M19.2268 7.35205V8.03328H20.1953V11.7342H21.0471V7.35205H19.2268Z"
                fill="#47D85F"
              />
              <path
                d="M9.56926 28.7632C10.6622 28.7632 11.4872 27.9501 11.4872 26.5089C11.4872 25.0695 10.6622 24.2565 9.56926 24.2565C8.48207 24.2565 7.6571 25.0695 7.6571 26.5089C7.6571 27.9501 8.48207 28.7632 9.56926 28.7632ZM9.56926 28.0563C8.94719 28.0563 8.51461 27.5674 8.51461 26.5089C8.51461 25.4523 8.94719 24.9633 9.56926 24.9633C10.1971 24.9633 10.6297 25.4523 10.6297 26.5089C10.6297 27.5674 10.1971 28.0563 9.56926 28.0563Z"
                fill="#47D85F"
              />
              <path
                d="M37.8129 11.8651C38.9058 11.8651 39.7308 11.052 39.7308 9.61084C39.7308 8.17147 38.9058 7.3584 37.8129 7.3584C36.7257 7.3584 35.9008 8.17147 35.9008 9.61084C35.9008 11.052 36.7257 11.8651 37.8129 11.8651ZM37.8129 11.1582C37.1908 11.1582 36.7583 10.6693 36.7583 9.61084C36.7583 8.55421 37.1908 8.06526 37.8129 8.06526C38.4407 8.06526 38.8733 8.55421 38.8733 9.61084C38.8733 10.6693 38.4407 11.1582 37.8129 11.1582Z"
                fill="#47D85F"
              />
              <path
                d="M3.11584 29.8542V30.8102H4.47101V35.9889H5.66347V29.8542H3.11584Z"
                fill="#47D85F"
              />
              <path
                d="M48.043 35.2092C49.5723 35.2092 50.7265 34.0701 50.7265 32.0539C50.7265 30.0396 49.5723 28.9005 48.043 28.9005C46.5213 28.9005 45.369 30.0396 45.369 32.0539C45.369 34.0701 46.5213 35.2092 48.043 35.2092ZM48.043 34.2185C47.1721 34.2185 46.5672 33.5354 46.5672 32.0539C46.5672 30.5743 47.1721 29.8894 48.043 29.8894C48.9215 29.8894 49.5264 30.5743 49.5264 32.0539C49.5264 33.5354 48.9215 34.2185 48.043 34.2185Z"
                fill="#47D85F"
              />
            </svg>
          </div>
          <h3 className="pb-[40px] text-[24px] lg:text-[50px]">
            Why is Certification Important?
          </h3>
          <p className="m-0 p-0 text-[18px] lg:text-[30px] lg:leading-[38px]">
            An individual's knowledge, abilities, and expertise in the field of
            cybersecurity are demonstrated in concrete form by the cybersecurity
            certification program, which is why it is significant. It can assist
            people progress in their careers at their current companies as well
            as help them differentiate themselves from other applicants on the
            job market. When recruiting or elevating cybersecurity specialists,
            employers frequently need or favour certificates.
          </p>
        </div>
        <div className="animate flex items-center flex-col mt-[300px]">
          <div className=" border-[4px] border-green w-fit">
            <h3 className="text-[24px] lg:text-[50px] p-[20px]">
              Training and Sessions
            </h3>
          </div>
          <div className="mt-[150px] flex lg:flex-row flex-col gap-[20px] w-full justify-around">
            <div className="flex flex-col items-center justify-around gap-[20px] lg:p-[20px] p-[25px] bg-black border-[2px] border-green lg:h-[400px] lg:w-[400px]">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_431_54)">
                  <path
                    d="M37.7555 57.9441L29.1887 54.7129C21.3555 51.7648 12.6152 55.7238 9.6668 63.5507C6.71875 71.3839 10.6777 80.1211 18.5078 83.0695L37.7555 90.323V57.9441Z"
                    fill="#C2C2C2"
                  />
                  <path
                    d="M152.128 64.1804C152.041 64.489 151.955 64.7793 151.871 65.0844V170.176C151.871 173.086 150.677 175.76 148.768 177.662C146.862 179.577 144.188 180.768 141.275 180.768H63.6644C64.0426 180.151 64.3859 179.508 64.6504 178.803C65.1543 177.451 65.3937 176.081 65.3937 174.733C65.3937 172.412 64.682 170.141 63.3906 168.239C62.0992 166.336 60.2441 164.818 57.9226 163.943L45.9793 159.445H45.9761C44.6316 158.937 43.2644 158.695 41.9133 158.695C39.589 158.695 37.3179 159.407 35.4187 160.701C33.5164 161.996 31.9918 163.848 31.1164 166.169C30.616 167.507 30.3734 168.881 30.3734 170.229C30.3734 172.559 31.0914 174.827 32.3797 176.73C33.6742 178.626 35.5297 180.157 37.8476 181.026L49.7941 185.524C51.139 186.034 52.509 186.273 53.8574 186.273C56.1851 186.273 58.4527 185.555 60.3519 184.27C60.6824 184.047 60.9816 183.785 61.2871 183.527C70.8398 191.552 85.7976 199.446 108.044 199.975C154.52 201.074 166.879 166.642 173.594 128.887C173.594 128.887 189.632 56.5715 190.719 52.7539C196.158 33.6445 162.463 27.8804 152.128 64.1804Z"
                    fill="#C2C2C2"
                  />
                  <path
                    d="M55.8535 96.9746V17.2H133.776V144.811H67.0191C66.8644 146.166 66.5558 147.517 66.0551 148.849C64.7922 152.21 62.5465 154.947 59.7777 156.827C59.0504 157.319 58.2914 157.75 57.5039 158.122L59.7906 158.985C63.1508 160.248 65.8945 162.493 67.7719 165.259C69.2992 167.508 70.2597 170.103 70.5683 172.825H141.275C142.021 172.825 142.658 172.535 143.149 172.05C143.634 171.559 143.924 170.916 143.924 170.176V2.64885C143.924 1.90237 143.634 1.26956 143.149 0.777759C142.658 0.289868 142.021 0.00314941 141.275 -0.000366211H48.3511C47.6078 0.00275879 46.9715 0.289478 46.4801 0.777759C45.9949 1.26917 45.7082 1.90237 45.7054 2.64885V92.7321L52.641 95.3367C53.7902 95.7778 54.8613 96.3289 55.8535 96.9746ZM94.8144 164.352C92.2508 164.352 90.1781 162.273 90.1781 159.713C90.1781 157.152 92.2508 155.08 94.8144 155.08C97.3722 155.08 99.4508 157.152 99.4508 159.713C99.4508 162.273 97.3722 164.352 94.8144 164.352Z"
                    fill="#C2C2C2"
                  />
                  <path
                    d="M46.241 153.706C47.5887 154.21 48.959 154.449 50.3039 154.449C52.6316 154.449 54.8992 153.738 56.7984 152.446C58.7008 151.155 60.2219 149.296 61.0977 146.978C61.6051 145.63 61.8445 144.263 61.8445 142.915C61.8445 140.588 61.1293 138.316 59.8414 136.42C58.5469 134.521 56.6914 132.994 54.3766 132.121L42.427 127.62C41.082 127.116 39.7121 126.877 38.3637 126.877C36.0359 126.877 33.7684 127.589 31.8691 128.88C29.9699 130.171 28.4457 132.03 27.5699 134.354C27.0598 135.693 26.8234 137.059 26.8203 138.411C26.8203 140.741 27.5387 143.009 28.8266 144.905C30.1211 146.808 31.9758 148.332 34.2977 149.208L46.241 153.706Z"
                    fill="#C2C2C2"
                  />
                  <path
                    d="M42.641 121.882C43.9886 122.392 45.359 122.632 46.707 122.632C49.0316 122.632 51.3054 121.92 53.2051 120.629C55.1043 119.334 56.6285 117.479 57.5011 115.161C58.0082 113.809 58.2445 112.443 58.2445 111.091C58.2476 108.766 57.5328 106.499 56.2445 104.596C54.95 102.697 53.0918 101.176 50.7738 100.3L38.8273 95.8023C37.4824 95.2922 36.1152 95.0527 34.764 95.0527C32.4363 95.0527 30.1687 95.7645 28.2695 97.0621C26.3703 98.3508 24.8461 100.212 23.9672 102.53C23.4664 103.872 23.2269 105.245 23.2269 106.593C23.2269 108.917 23.9386 111.185 25.2301 113.087C26.5215 114.987 28.3801 116.511 30.7011 117.39L42.641 121.882Z"
                    fill="#C2C2C2"
                  />
                  <path
                    d="M94.8144 115.432C110.62 115.432 123.429 102.619 123.429 86.8137C123.429 71.0055 110.62 58.1962 94.8144 58.1962C79.0035 58.1962 66.1969 71.0055 66.1937 86.8137C66.1969 102.619 79.0035 115.432 94.8144 115.432ZM111.571 103.567C109.095 106.04 106.093 107.958 102.739 109.145C104.349 107.205 105.681 104.717 106.73 101.838H113.139C112.645 102.436 112.119 103.019 111.571 103.567ZM114.95 99.2993H107.552C108.5 95.9165 109.07 92.118 109.174 88.0837H118.471C118.261 92.1872 116.991 96.011 114.95 99.2993ZM118.472 85.5477H109.164C109.067 81.5102 108.509 77.7114 107.558 74.3352H114.95C116.991 77.6169 118.261 81.4407 118.472 85.5477ZM111.571 70.0641C112.119 70.6126 112.645 71.1919 113.139 71.7903H106.73C106.279 70.543 105.772 69.3649 105.212 68.2817C104.484 66.8645 103.653 65.5825 102.746 64.4833C106.097 65.6766 109.098 67.5946 111.571 70.0641ZM96.084 63.154C96.4808 63.179 96.8715 63.2044 97.2652 63.2454C97.8824 63.529 98.5031 63.9036 99.114 64.4048C100.979 65.9227 102.708 68.4962 104.021 71.7907H96.084V63.154ZM96.084 74.3352H104.9C105.914 77.6298 106.528 81.4532 106.638 85.5477H96.084V74.3352ZM96.084 88.0833H106.629C106.512 92.1809 105.898 96.0012 104.896 99.2989H96.084V88.0833ZM96.084 101.838H104.005C103.68 102.663 103.334 103.463 102.959 104.181C101.835 106.361 100.506 108.086 99.1137 109.223C98.5027 109.724 97.8824 110.105 97.2648 110.386C96.8711 110.424 96.4804 110.455 96.0836 110.474V101.838H96.084ZM78.0617 103.567C77.5074 103.019 76.975 102.436 76.4933 101.838H82.8929C83.3496 103.085 83.8472 104.26 84.4113 105.347C85.1453 106.777 85.9676 108.043 86.8777 109.145C83.5293 107.958 80.525 106.039 78.0617 103.567ZM93.5453 110.474C93.1484 110.455 92.7547 110.424 92.3578 110.386C91.7406 110.106 91.1168 109.724 90.5058 109.223C88.6414 107.702 86.9183 105.129 85.5988 101.837H93.5453V110.474ZM93.5453 99.2993H84.7199C83.7152 96.0016 83.0949 92.1747 82.991 88.0837H93.5457V99.2993H93.5453ZM93.5453 85.5477H82.9941C83.098 81.4532 83.7246 77.6294 84.7297 74.3352H93.5453V85.5477ZM90.5058 64.4044C91.1168 63.9036 91.7402 63.5286 92.3578 63.245C92.7547 63.204 93.1484 63.179 93.5453 63.1536V71.7899H85.6144C85.9387 70.9712 86.2886 70.1743 86.6664 69.4466C87.791 67.2673 89.1137 65.5411 90.5058 64.4044ZM78.0617 70.0641C80.525 67.595 83.5359 65.6704 86.8808 64.4833C85.2836 66.4231 83.939 68.918 82.8929 71.7903H76.4933C76.975 71.1919 77.5074 70.6122 78.0617 70.0641ZM74.6695 74.3352H82.0715C81.1199 77.7114 80.5535 81.5102 80.4492 85.5477H71.1484C71.3652 81.4407 72.6285 77.6169 74.6695 74.3352ZM80.4586 88.0833C80.5625 92.1177 81.1105 95.9165 82.0711 99.2989H74.6691C72.6281 96.0106 71.3652 92.1868 71.1476 88.0833H80.4586Z"
                    fill="#C2C2C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_431_54">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="lg:text-[30px] text-[32px] font-semibold text-center">
                Interactive Online Webinars
              </h2>
            </div>
            <div className="flex flex-col items-center justify-around gap-[10px] lg:p-[20px] p-[25px] lg:pt-0 bg-black border-[2px] border-green lg:h-[400px] lg:w-[400px]">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_431_63)">
                  <path
                    d="M102.997 47.6096C116.108 47.6096 126.736 36.9812 126.736 23.8704C126.736 10.7595 116.108 0.131104 102.997 0.131104C89.8861 0.131104 79.2577 10.7595 79.2577 23.8704C79.2577 36.9812 89.8861 47.6096 102.997 47.6096Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M126.776 51.1705H120.919H112.165L103.41 61.6499L94.3603 51.1705H85.1073H78.5167H73.4212L71.7228 93.1602H132.494L131.294 51.1705H126.776Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M31.2742 154.325C44.3814 154.325 55.0069 143.699 55.0069 130.592C55.0069 117.485 44.3814 106.859 31.2742 106.859C18.167 106.859 7.5415 117.485 7.5415 130.592C7.5415 143.699 18.167 154.325 31.2742 154.325Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M55.0593 157.899H49.2032H40.442L31.6873 168.385L22.6441 157.899H13.391H6.78733H1.69191L0 199.875H60.7778L59.5711 157.899H55.0593Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M170.496 153.367C183.604 153.367 194.229 142.742 194.229 129.635C194.229 116.527 183.604 105.902 170.496 105.902C157.389 105.902 146.764 116.527 146.764 129.635C146.764 142.742 157.389 153.367 170.496 153.367Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M198.793 156.941H194.275H188.419H179.658L170.91 167.421L161.86 156.941H152.607H146.016H140.914L139.222 198.924H200L198.793 156.941Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M77.4936 170.595H68.6667V174.825H77.4936V170.595Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M130.428 170.595H121.608V174.825H130.428V170.595Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M112.788 170.595H103.961V174.825H112.788V170.595Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M95.1341 170.595H86.3138V174.825H95.1341V170.595Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M32.507 52.9608H28.2772V61.4401H32.507V52.9608Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M32.507 36.0089H28.2772V44.4882H32.507V36.0089Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M32.507 69.9193H28.2772V78.3986H32.507V69.9193Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M32.507 86.8778H28.2772V95.3571H32.507V86.8778Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M33.3858 22.244H35.504V18.0208H29.1626V24.349H33.3858V22.244Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M159.027 18.0208H150.2V22.2505H159.027V18.0208Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M141.38 18.0208H132.553V22.2505H141.38V18.0208Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M53.151 18.0208H44.3242V22.2505H53.151V18.0208Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M70.7916 18.0208H61.9713V22.2505H70.7916V18.0208Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M169.959 24.349H174.188V18.0208H167.854V22.244H169.959V24.349Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M174.195 66.7518H169.959V75.2245H174.195V66.7518Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M174.195 32.8284H169.959V41.3076H174.195V32.8284Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M174.195 49.7933H169.959V58.2726H174.195V49.7933Z"
                    fill="#C7C7C7"
                  />
                  <path
                    d="M174.195 83.7039H169.959V92.1831H174.195V83.7039Z"
                    fill="#C7C7C7"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_431_63">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h2 className="lg:text-[30px] text-[32px] font-semibold text-center">
                Live Workshops
              </h2>
            </div>
          </div>
        </div>
        <div className="animate lg:mt-[280px] flex flex-col items-center lg:gap-[100px] gap-[70px] my-[80px] lg:my-[160px] w-full">
          <div className=" border-[4px] border-green w-fit">
            <h3 className="text-[24px] lg:text-[50px] p-[20px] text-center">
              Tools you Learn
            </h3>
          </div>
          <div className="w-full space-y-[56px]">
            <div className="flex justify-around items-center flex-wrap gap-[20px] lg:gap-[20px]">
              <img
                className=" lg:p-[10px] h-[40px] lg:h-[112px]"
                src={aircrack}
                alt="aircrack"
                  
              />
              <img
                className=" lg:p-[10px] h-[40px] lg:h-[112px]"
                src={nmap}
                alt="nmap"
                  
              />
              <img
                className=" lg:p-[10px] h-[40px] lg:h-[112px]"
                src={burpsuite}
                alt="burpsuite"
                  
              />
              <img
                className=" lg:p-[10px] h-[40px] lg:h-[112px]"
                src={wireshark}
                alt="wireshark"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={M}
                alt="M"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={nikto}
                alt="nikto"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={threehead}
                alt="dragon"
                  
              />
              <img
                className=" lg:p-[10px] h-[40px] lg:h-[60px]"
                src={hashcat}
                alt="hashcat"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={SETK}
                alt="setk"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={beef}
                alt="beef"
                  
              />
              <img
                className=" lg:p-[10px] h-[60px] lg:h-[112px]"
                src={green}
                alt="green"
                  
              />
              <img
                className=" lg:p-[10px] h-[70px] lg:h-[112px]"
                src={kali}
                alt="kali"
                 
              />
              <img
                className=" lg:p-[10px] h-[80px] lg:h-[150px]"
                src={passware}
                alt="passware"
                 
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col lg:gap-[100px] gap-[70px] items-center my-[56px] lg:my-[128px]">
          <div className=" border-[4px] border-green w-fit">
            <h3 className="text-[24px] lg:text-[50px] lg:p-[20px] p-[10px] text-center">
              Certifications & Accreditations
            </h3>
          </div>
          <div className="w-full rounded-[12px] space-y-[56px] gradient">
            <Marquee speed={20} autoFill behavior="" direction="left">
              <img
                className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                src={ISO}
                alt="ISO Cert"
                  
              />
              <img
                className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                src={MSME}
                alt="MSME Cert"
                  
              />
              <img
                className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                src={skillindia}
                alt="Skill India Cert"
                  
              />
              <img
                className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                src={CNI}
                alt="CNI cert"
                  
              />
              <img
                className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                src={ASNI}
                alt="ASNI Cert"
                  
              />
            </Marquee>
            <Marquee speed={20} autoFill behavior="" direction="right">
              <div className="flex items-center ">
                <img
                  className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                  src={DigitalIndia}
                  alt="Digital India Cert"
                    
                />
                <img
                  className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                  src={UKAC}
                  alt="UKAC Cert"
                    
                />
                <img
                  className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                  src={QRO}
                  alt="QRO Cert"
                    
                />
                <img
                  className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                  src={iqcs}
                  alt="IQCS Cert"
                    
                />
                <img
                  className="h-[96px] mx-[20px] lg:h-[128px] lg:mx-[40px]"
                  src={IAF}
                  alt="IAF Cert"
                    
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
