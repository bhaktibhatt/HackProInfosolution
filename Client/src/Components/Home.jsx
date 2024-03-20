import React from "react";
import Tools from '../assets/Tools.png'
import image from "../assets/image.png"
import Marquee from 'react-fast-marquee';
const Main = () =>{
    const row1 = [
        "./src/assets/ISO.png",
        "./src/assets/MSME.png",
        "./src/assets/SkillIndia.png",
        "./src/assets/CNI.png",
        "./src/assets/ASNI.png"
    ]
    const row2 = [
        "./src/assets/DigitalIndia.png",
        "./src/assets/UKAC.png",
        "./src/assets/QRO.png",
        "./src/assets/iqcs.png", 
        "./src/assets/IAF.png"
    ]

    return(
        <div>
            <div className="relative w-full">
                <img className="w-full h-3/4" src={ image } alt="" />
                <button className="absolute top-2/3 left-72 bg-slate-50 px-6 py-4 rounded-2xl text-3xl text-violet-900  hover:drop-shadow-xl hover:">Enroll Now</button>
        </div>
        <div className="m-20">
            <h3 className="py-10 text-5xl">Why is Certification Important?</h3>
            <p className="m-0 p-0 text-3xl">An individual's knowledge, abilities, and expertise in the field of cybersecurity 
            are demonstrated in concrete form by the cybersecurity certification program, which is why it is significant.
             It can assist people progress in their careers at their current companies as well as help them differentiate themselves from other applicants on the job market.
             When recruiting or elevating cybersecurity specialists, employers frequently need or favour certificates.</p>
             <div>
                <h3 className="py-20 text-5xl">Tools You Learn -</h3>
                <img src={ Tools } alt="" />
             </div>
             <div className="w-full flex flex-col items-center">
                <h3 className="pb-14 pt-20 text-5xl">Accreditations</h3>
                <div className="w-full rounded-xl">
                    <Marquee speed={100} autoFill behavior="" direction="left">
                    <div className="flex flex-row ">
                        <div className=" flex items-center">
                        {row1.map((im) =>(
                            <img className="h-32 m-4" src={im}></img>
                            ))}
                        </div>
                    </div>
                    </Marquee>
                    <Marquee speed={100} autoFill behavior="" direction="right">
                    <div className="px-8 flex items-center ">
                        {row2.map((im) =>(
                        <img className="h-32 m-6" src={im}></img>
                        ))}
                    </div>
                    </Marquee>
                </div>
             </div>
        </div>
        </div>

    )
}
export default Main