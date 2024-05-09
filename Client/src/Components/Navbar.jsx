import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

    let menuRef = useRef();
    let aboutRef = useRef();
    let navRef1 = useRef();
    let navRef2 = useRef();
    let navRef3 = useRef();
    let navRef4 = useRef();
    let navRef5 = useRef();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCourse, setShowCourse] = useState(false);
    const [showContact, setShowContact] = useState(false);


    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
            }
        }
        document.addEventListener("click", handler);
    });

    useEffect(()=>{
        let handler = (e) =>{
            if(aboutRef.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
            }
        }
        document.addEventListener("click", handler);
    });
    useEffect(()=>{
        let handler = (e) =>{
            if(navRef1.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
                console.log("e.target"+e.target)
            }
        }
        document.addEventListener("click", handler);
    });  
    
    useEffect(()=>{
        let handler = (e) =>{
            if(navRef2.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
                console.log("e.target"+e.target)
            }
        }
        document.addEventListener("click", handler);
    }); 
    
    useEffect(()=>{
        let handler = (e) =>{
            if(navRef3.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
                console.log("e.target"+e.target)
            }
        }
        document.addEventListener("click", handler);
    });  
    
    useEffect(()=>{
        let handler = (e) =>{
            if(navRef4.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
                console.log("e.target"+e.target)
            }
        }
        document.addEventListener("click", handler);
    });   

   useEffect(()=>{
        let handler = (e) =>{
            if(navRef5.current.contains(e.target)){
                setMenuOpen(false);
                console.log(menuRef.current);
                console.log("e.target"+e.target)
            }
        }
        document.addEventListener("click", handler);
    }); 

    return (
        <div className="sticky top-0 bg-slate-200 w-full z-10 lg:py-[8px] lg:px-[24px] lg:flex lg:items-center" ref={menuRef}>
            <div className="w-full flex items-center justify-between px-[20px]">
                <NavLink to="/" className="flex h-[48px] w-[48px]">
                    <svg className="h-[40px] w-[40px]" width="57" height="70" viewBox="0 0 57 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57 52.4205V18.0858L28.6242 0.91864L0.248291 18.0858V52.4205L28.6242 69.5877" fill="#F3F5F6"/><path d="M28.4307 10.7428L38.1118 17.2919L43.2506 31.2634L39.2228 38.9767L50.4724 43.4884L56.8609 52.2203L28.4307 69.5876L0 52.2203L6.38849 43.4884L17.6385 38.9767L13.6107 31.2634L18.7495 17.2919" fill="#2F2C4D"/><path d="M28.4307 10.7428L38.1118 17.2919L43.2506 31.2634L39.2228 38.9767L50.4724 43.4884L56.8609 52.2203L28.4307 69.5876L0 52.2203L6.38849 43.4884L17.6385 38.9767L13.6107 31.2634L18.7495 17.2919" fill="#2F2C4D"/><path d="M39.8159 39.2144L42.0351 42.0691V49.128L48.1807 44.1709L50.5762 50.4375L51.3056 46.5079L56.8608 52.2203L50.4723 43.4885" fill="#647D92"/><path d="M17.0449 39.2144L14.8261 42.0691V49.128L8.68013 44.1709L6.28463 50.4375L5.55521 46.5079L0 52.2203L6.38849 43.4885" fill="#647D92"/><path d="M13.6399 60.5523L18.8883 54.0396L23.159 60.5523L28.4308 52.2203L33.702 60.5523L37.9728 54.0396L43.2216 60.5523L28.4308 69.5877" fill="#647D92"/><path d="M28.4308 22.4946L36.098 24.569L40.9938 31.4451L31.2022 45.7176L36.5144 43.5608L39.2229 38.9767L43.2507 31.2634L38.1119 17.2919L28.4308 10.7428L18.7496 17.2919L13.6108 31.2634L17.6386 38.9767L20.3467 43.5608L25.6589 45.7176L15.8677 31.4451L20.7635 24.569" fill="#647D92"/><path d="M3.98999 21.1367V21.7597H4.79612V25.1306H5.50314V21.1367H3.98999Z" fill="#A2B1BD"/><path d="M48.4258 16.4117V17.0348H49.2319V20.4057H49.9389V16.4117H48.4258Z" fill="#A2B1BD"/><path d="M12.697 19.2425C13.6061 19.2425 14.2921 18.4996 14.2921 17.1876C14.2921 15.8756 13.6061 15.1347 12.697 15.1347C11.7937 15.1347 11.1077 15.8756 11.1077 17.1876C11.1077 18.4996 11.7937 19.2425 12.697 19.2425ZM12.697 18.5975C12.1806 18.5975 11.8204 18.1522 11.8204 17.1876C11.8204 16.2231 12.1806 15.7777 12.697 15.7777C13.2192 15.7777 13.5794 16.2231 13.5794 17.1876C13.5794 18.1522 13.2192 18.5975 12.697 18.5975Z" fill="#A2B1BD"/><path d="M45.3213 26.4553C46.2303 26.4553 46.9164 25.7125 46.9164 24.4004C46.9164 23.0884 46.2303 22.3475 45.3213 22.3475C44.418 22.3475 43.7319 23.0884 43.7319 24.4004C43.7319 25.7125 44.418 26.4553 45.3213 26.4553ZM45.3213 25.8103C44.8049 25.8103 44.4447 25.365 44.4447 24.4004C44.4447 23.4359 44.8049 22.9906 45.3213 22.9906C45.8435 22.9906 46.2037 23.4359 46.2037 24.4004C46.2037 25.365 45.8435 25.8103 45.3213 25.8103Z" fill="#A2B1BD"/><path d="M52.6592 26.4005V27.1433H53.6235V31.1793H54.4715V26.4005H52.6592Z" fill="#A2B1BD"/><path d="M19.3914 8.93604V9.67892H20.3557V13.7148H21.2037V8.93604H19.3914Z" fill="#A2B1BD"/><path d="M9.7759 32.285C10.8641 32.285 11.6854 31.3984 11.6854 29.8267C11.6854 28.2571 10.8641 27.3704 9.7759 27.3704C8.69344 27.3704 7.87207 28.2571 7.87207 29.8267C7.87207 31.3984 8.69344 32.285 9.7759 32.285ZM9.7759 31.5142C9.15653 31.5142 8.72584 30.981 8.72584 29.8267C8.72584 28.6745 9.15653 28.1413 9.7759 28.1413C10.401 28.1413 10.8317 28.6745 10.8317 29.8267C10.8317 30.981 10.401 31.5142 9.7759 31.5142Z" fill="#A2B1BD"/><path d="M37.8965 13.8576C38.9847 13.8576 39.806 12.971 39.806 11.3994C39.806 9.82972 38.9847 8.94305 37.8965 8.94305C36.814 8.94305 35.9927 9.82972 35.9927 11.3994C35.9927 12.971 36.814 13.8576 37.8965 13.8576ZM37.8965 13.0868C37.2771 13.0868 36.8464 12.5536 36.8464 11.3994C36.8464 10.2471 37.2771 9.71389 37.8965 9.71389C38.5216 9.71389 38.9523 10.2471 38.9523 11.3994C38.9523 12.5536 38.5216 13.0868 37.8965 13.0868Z" fill="#A2B1BD"/><path d="M3.35059 33.4749V34.5173H4.69984V40.1648H5.88712V33.4749H3.35059Z" fill="#A2B1BD"/><path d="M48.082 39.3146C49.6047 39.3146 50.7538 38.0724 50.7538 35.8738C50.7538 33.6771 49.6047 32.4349 48.082 32.4349C46.5669 32.4349 45.4197 33.6771 45.4197 35.8738C45.4197 38.0724 46.5669 39.3146 48.082 39.3146ZM48.082 38.2342C47.2149 38.2342 46.6127 37.4893 46.6127 35.8738C46.6127 34.2602 47.2149 33.5133 48.082 33.5133C48.9567 33.5133 49.5589 34.2602 49.5589 35.8738C49.5589 37.4893 48.9567 38.2342 48.082 38.2342Z" fill="#A2B1BD"/>
                    </svg>
                </NavLink>
            {/* ham menu */}
            <button onClick={() => {setMenuOpen(!menuOpen);setShowCourse(false); setShowContact(false)}} className="lg:hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className ="w-[36px] h-[36px]"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            </button>
            </div>
            <div className="relative lg:flex font-semibold text-[18px] text-zinc-950 lg:mt-0 lg:mr-[80px]"  >
                <ul className={`absolute bg-slate-200 w-full lg:static flex lg:flex-row px-[12px] flex-col items-center lg:gap-[50px] lg:justify-around lg:space-y-0 space-y-[12px] lg:translate-y-0 ${menuOpen ? 'translate-y-[0]': ' translate-y-[-100vh]'} transition-all duration-700 ease-in`}>
                    <li className="lg:relative text-center cursor-pointer px-[32px]">
                        <button className="cursor-pointer" onClick={() => setShowCourse(!showCourse)}>Courses</button>
                        <div className={` cursor-pointer bg-slate-300 lg:absolute py-[12px] px-[16px] lg:left-[-100px] w-[300px] rounded-md transition-all duration-700 ease-in ${showCourse ? 'flex': 'hidden'}`} >
                            <ul className="space-y-[12px] text-[16px] text-left font-medium">
                                <li className="whitespace-nowrap hover:text-violet-700 cursor-pointer" ref={navRef1}>
                                    <NavLink to="/ethicalhackingandcybersecurity">Ethical Hacking and Cyber Security</NavLink>
                                </li>
                                <li className="whitespace-nowrap hover:text-violet-700 cursor-pointer" ref={navRef2}>
                                    <NavLink to="/pentesting">Penetration Testing</NavLink>
                                </li>
                                <li className="whitespace-nowrap hover:text-violet-700 cursor-pointer" ref={navRef3}>
                                    <NavLink to="/cyberforensics">Cyber Forensics Investigation</NavLink>
                                </li>
                                <li className="whitespace-nowrap hover:text-violet-700 cursor-pointer" ref={navRef4}>
                                    <NavLink to="/bugbounty">Bug Bounty Hunting</NavLink>
                                    </li>
                                <li className="whitespace-nowrap hover:text-violet-700 cursor-pointer" ref={navRef5}>
                                    <NavLink to="/computernetwork">Computer Network</NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="px-[32px] cursor-pointer"><NavLink to="/about" ref={aboutRef}>About</NavLink></li>
                    <li className="relative text-center cursor-pointer lg:pb-0 pb-[20px] px-[32px]">
                        <button onClick={() => setShowContact(!showContact)}>Contact</button> 
                        <div className={`bg-slate-300 lg:absolute py-[12px] px-[16px] lg:left-[-100px] w-[300px] rounded-md ${showContact ? 'flex' : 'hidden'}`}>
                            <ul className="space-y-[12px] text-[16px] text-left font-medium">
                                <li className="whitespace-nowrap flex font-mono gap-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 256 256"><path fill="currentColor" d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208"/></svg>
                                    <a className="hover:text-violet-700" href="tel:+917972771883" target="_blank">+91-79727-71883</a></li>
                                <li className="whitespace-nowrap flex gap-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                                    <a className="hover:text-violet-700" href="mailto:hackproinfosolution@gmail.com " target="_blank">hackproinfosolution@gmail.com</a></li>
                                <li className="whitespace-nowrap flex gap-[10px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
                                    <a className="hover:text-violet-700 " href="https://www.instagram.com/hackproinfosolution/" target="_blank">@hackproinfosolution</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>    
            </div>
        </div>
    )
}
export default Navbar