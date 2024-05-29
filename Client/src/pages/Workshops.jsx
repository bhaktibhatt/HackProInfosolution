import React from 'react';
import pageBg from "../assets/pageBg.png";
import { NavLink } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../Components/slickcustom.css'
import workshopDBATU1 from "../assets/workshopDBATU1.png"
import workshopDBATU2 from "../assets/workshopDBATU2.png"
import workshopDBATU3 from "../assets/workshopDBATU3.png"

const Workshops = () => {
  var settings = {
    dots: true,
    arrows:false,
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

  return (
    
    <div>
      <div className="relative w-full flex flex-col items-center gap-[100px] text-white ">
        <img
          className="absolute w-full h-full opacity-20 -z-10"
          src={pageBg}
          alt="bannerbg"
        />
        <div className='lg:p-[200px] lg:pt-[20px] p-[20px] flex flex-col items-center w-full gap-[100px]'>
        <div className='bg-black border-[2px] border-green w-fit lg:p-[30px] p-[20px]'>
           <h1 className='text-[30px] text-center'>Workshops Conducted</h1>
        </div>

          {/* Workshop details begin */}
          <div> 
              <div className='flex flex-col items-center lg:gap-[100px] gap-[40px]'>
                <div className='text-[20px] bg-black border-[2px] border-green w-fit p-[20px]'>
                  <p>At DBATU</p>
                </div>
                <div className='w-[350px] lg:container'>
                <Slider {...settings}>
                          <div className='border-2 border-green'><img className='w-full h-auto' src={workshopDBATU1} alt="" /></div>
                          <div className='border-2 border-green'><img src={workshopDBATU2} alt="" /></div>
                          <div className='border-2 border-green'><img src={workshopDBATU3} alt="" /></div>
                    </Slider>
                </div>
              <div className='flex flex-col items-center lg:p-[50px] p-[20px] bg-black2 border-[3px] w-fit border-green'>
                 <p className='text-[20px] font-semibold'>Our team conducted a live workshop at DBATU.<br/>This introductory session covered the basics of cybersecurity with the objective of spreading awareness about digital footprinting, securing data, and two-factor authentication (2FA). We also discussed social engineering and engaged the participants with tools available to them, such as password managers and antivirus software.</p>
              </div>
          </div>
            
          </div>
        </div>
        <div className='flex flex-col gap-[40px] items-center justify-center font-semibold mb-[20px]'>
            <div className='flex flex-col items-center bg-black border-[3px] border-green p-[30px]'>
                <p>New Events and workshops coming soon</p>
            </div>

            <div className='flex flex-col items-center bg-black border-[3px] border-green p-[20px] m-[20px]'>
                <p className='text-center lg:leading-[30px]'>Want to Have a live Workshop conducted at your college?<br/>
                Mail Us at - <span className="text-green"><a  href="mailto:hackproinfosolution@gmail.com " target="_blank">hackproinfosolution@gmail.com</a></span><br/>
                Register for our courses <span className="text-green"><NavLink to="/registrationform">here</NavLink></span></p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Workshops