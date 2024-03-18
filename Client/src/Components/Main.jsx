import React from "react";
import Tools from '../assets/Tools.png'
const Main = () =>{
    return(
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
        </div>

    )
}
export default Main