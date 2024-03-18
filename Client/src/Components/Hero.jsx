import React from "react";
import image from "../assets/image.png"
const Hero = () => {
    return (
        <div className="relative w-full">
            <img className="w-full h-3/4" src={ image } alt="" />
            <button className="absolute top-2/3 left-72 bg-slate-50 px-6 py-4 rounded-2xl text-3xl text-violet-900  hover:drop-shadow-xl hover:">Enroll Now</button>
        </div>
    )
}
export default Hero