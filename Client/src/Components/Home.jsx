import React from "react";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import pageBg from "../assets/pageBg.png";
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
        breakpoint: 766,
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
      tl.set("#title, #btn", {
        autoAlpha: 0,
        x: "-300px",
        filter: "blur(20px)",
      });

      // Animation: move text and button to their original position, remove blur, and fade in with stagger
      tl.to("#title, #btn", {
        delay: 0.3,
        duration: 2.5,
        x: 0,
        filter: "blur(0px)",
        autoAlpha: 1,
        ease: "power2.inout", // Easing function
        stagger: {
          each: 0.1,
          from: "right",
          ease: "power2.inOut",
        }, // Stagger the animation start times
      });
    }, comp.current);

    // Clean up the animation context on component unmount
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const elements = gsap.utils.toArray(".animate");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: 50,
          filter: "blur(10px)",
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
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
    <div className="relative text-white flex flex-col lg:gap-[100px]">
      <div
        className="absolute inset-0 w-full h-auto bg-repeat-y opacity-20 -z-10"
        style={{ backgroundImage: `url(${pageBg})`, backgroundSize: "cover" }}
      ></div>
      <div className="relative w-full overflow-hidden">
        <img
          className="lg:w-full lg:h-full w-auto max-w-none h-[70vh] blur-[2px] brightness-[.90]"
          src={image}
          alt="hero-img"
        />
        <div
          ref={comp}
          id="title-btn-container "
          className="absolute top-0 right-0 left-0 bottom-0 m-auto flex flex-col justify-center items-center gap-[8px]"
        >
          <h1
            id="title"
            className="text-white font-spaceGrotesk lg:text-[72px] md:text-[50px] text-[24px] font-semibold"
          >
            HACKPRO INFOSOLUTION
          </h1>
          <NavLink to="/registrationform">
            <button
              id="btn"
              className="lg:w-[230px] rounded-lg border-[2px] border-green bg-green text-black font-semibold text-slate py-[4px] px-[8px] lg:px-[24px] lg:py-[16px] lg:text-[30px] hover:drop-shadow-xl hover:text-green hover:bg-black hover:border-[2px] hover:border-green transition-all"
            >
              Enroll Now
            </button>
          </NavLink>
        </div>
      </div>
      <div
        className="lg:my-[30px] lg:mx-[80px] lg:mt-0 m-[40px]"
        ref={animateRef}
      >
        <div className="animate flex flex-col">
          <div className="flex justify-center">
            <h3
              id="course"
              className=" mb-[100px] text-[30px] lg:text-[50px] text-white p-[20px] border-[4px] bg-black border-green"
            >
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
        <div className="animate relative mt-[80px] lg:mt-[160px] border-[4px] bg-black border-green lg:p-[70px] p-[30px]">
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
          <h3 className="pb-[40px] text-[24px] lg:text-[50px] text-center">
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
        <div className="animate flex items-center flex-col lg:gap-[150px] gap-[50px] lg:mt-[300px] mt-[100px]">
          <div className=" border-[4px] border-green bg-black w-fit">
            <h3 className="text-[24px] text-center lg:text-[50px] p-[20px]">
              Training and Sessions
            </h3>
          </div>
          <div className=" flex lg:flex-row flex-col gap-[20px] w-full justify-around">
            <NavLink to="/workshops">
              <div className="flex flex-col items-center justify-around gap-[10px] lg:p-[20px] p-[25px] lg:pt-0 bg-black border-[2px] border-green lg:h-[400px] lg:w-[400px]">
                <svg
                  className="lg:h-[200px] lg:w-[200px] h-[100px] w-[100px]"
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
            </NavLink>
          </div>
        </div>
        <div className="animate lg:mt-[280px] flex flex-col items-center lg:gap-[100px] gap-[70px] my-[80px] lg:my-[160px] w-full">
          <div className=" border-[4px] border-green bg-black w-fit">
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
          <div className=" border-[4px] border-green bg-black w-fit">
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
