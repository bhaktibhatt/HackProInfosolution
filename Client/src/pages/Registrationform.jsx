import React from "react";
import pageBg from "../assets/pageBg.png";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="relative w-full flex flex-col items-center gap-[100px] text-white ">
                <div className='absolute inset-0 w-full h-full bg-repeat-y opacity-20 -z-10' style={{ backgroundImage: `url(${pageBg})`, backgroundSize: 'cover' }}></div>
                <h1 className="text-[35px] lg:pt-[150px] lg:text-[72px] font-semibold top-[48px] left-[40px] lg:top-[288px] lg:left-[128px]">
                    Register to get Details
                </h1>
                <div className="text-green font-semibold flex flex-col bg-black w-fit border-[2px] border-green items-center p-[40px] mb-[100px]  pt-[20px] lg:mb-[200px]">
                    <form id="registrationform">
                        <div>
                            <h3 className="text-[24px] text-left">Personal Details :</h3>
                            <div className="flex w-full lg:flex-row flex-col gap-[16px] justify-around mt-[40px] mb-[40px]">
                                <input
                                    id="name-input"
                                    className="bg-black2 focus:outline-none focus:border-[2px] focus:ring-1 border-2 rounded-[6px] border-green p-[8px] w-[300px]"
                                    type="text"
                                    placeholder={"Full Name"}
                                    required
                                />
                                <input
                                    id="email-input"
                                    className="bg-black2 focus:outline-none focus:border-[2px] focus:ring-1 border-2 rounded-[6px] border-green p-[8px] w-[300px]"
                                    type="email"
                                    placeholder={"Email ID"}
                                    required
                                />
                            </div>
                            <div className="flex w-full justify-around lg:flex-row flex-col gap-[16px]">
                                <input
                                    className="bg-black2 focus:outline-none focus:border-[2px] focus:ring-1 border rounded-[6px] border-green p-[8px] w-[300px]"
                                    type="tel"
                                    pattern="[0-9]{10}"
                                    title="10 Digit number only."
                                    placeholder={"Contact"}
                                    id="contact-input"
                                    required
                                />
                                <div className="relative">
                                    <select
                                        className=" bg-black2 focus:outline-none focus:border-[2px] focus:ring-1 border rounded-[6px] border-violet-500 p-[8px] pr-[48px] w-[300px]  appearance-none bg-transparent bg-no-repeat bg-right bg-contain break-words"
                                        placeholder={"Courses"}
                                        required
                                        id="courses-input"
                                    >
                                        <option value="">--Select course--</option>
                                        <option value="Ethical Hacking and Cyber Security">
                                            Ethical Hacking and Cyber Security
                                        </option>
                                        <option value="Cyber Forensics">Cyber Forensics</option>
                                        <option value="Pentration Testing">Pentration Testing</option>
                                        <option value="Bug Bounty">Bug Bounty</option>
                                        <option value="Computer Network">Computer Network</option>
                                    </select>
                                    <div className="absolute top-[12px] right-[12px] pointer-events-none">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-[16px] h-[16px]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[20px] pt-[40px]">Educational Details : </h3>
                            <div className="flex lg:flex-row flex-col items-center lg:gap-[100px]">
                                <div className="flex w-fit justify-around mt-[40px] mb-[40px]  flex-col gap-[40px]">
                                    <div className="relative">
                                        <select
                                            className="bg-black2 w-[300px] focus:outline-none border-[2px] focus:ring-1 rounded-[6px]  border-green p-[8px] pr-[48px] appearance-none bg-transparent "
                                            required
                                            id="education-input"
                                        >
                                            <option value="">--Highest level of education--</option>
                                            <option value="10th">10th</option>
                                            <option value="12th">12th</option>
                                            <option value="UG">Undergraduate</option>
                                            <option value="PG">Graduate</option>
                                        </select>
                                        <div className="absolute top-[12px] right-[12px] pointer-events-none">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-[16px] h-[16px]"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        className="bg-black2 focus:outline-none focus:border-[2px] focus:ring-1 border-[2px] rounded-[6px] border-green p-[8px] w-[300px]"
                                        type="text"
                                        placeholder={"name of institute/university/college/school"}
                                        required
                                        id="university-input"
                                    />
                                </div>
                                <div>
                                    <h3 className="mb-[20px] font-bold">Mode of Instruction :</h3>
                                    <div className="flex items-center gap-x-[8px]">
                                        <input
                                            type="radio"
                                            name="MODE"
                                            value={"Online"}
                                            id="online"
                                        />
                                        <label htmlFor="online">
                                            Online
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-[8px]">
                                        <input
                                            type="radio"
                                            name="MODE"
                                            value={"Offline"}
                                            id="offline"
                                        />
                                        <label htmlFor="offline">
                                            Offline
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="change" id="errorlog"></div>
                        <div className="flex items-center w-full justify-center mt-[20px]">
                            <input
                                type="submit"
                                className="border-[2px] border-green lg:py-[15px] py-[8px] lg:px-[32px] px-[10px] rounded-[10px] text-[20px] font-semibold bg-green text-black hover:shadow-green hover:shadow-lg hover:bg-black hover:text-green"
                                value={"Register"}
                            />
                        </div>
                    </form>
                </div>
                {
                    (window.onload = function () {
                        fetch("https://hackproinfosolutionserver.onrender.com/getregistrations", {
                            method: "GET",
                            mode: 'cors',
                            headers: {
                                "Content-Type": "Application/JSON",
                            },
                        }).then((res) => {
                            console.log("total registrations")
                            console.log(res)
                        })
                        document
                            .getElementById("registrationform")
                            .addEventListener("submit", async (submitform) => {
                                submitform.preventDefault();
                                let regname = document.getElementById("name-input").value;
                                let regmail = document.getElementById("email-input").value;
                                let regcontact = document.getElementById("contact-input").value;
                                let regcourse = document.getElementById("courses-input").value;
                                let regedu = document.getElementById("education-input").value;
                                let reguni = document.getElementById("university-input").value;
                                let regradiobuttons = document.getElementsByName("MODE");
                                for (let i = 0; i < regradiobuttons.length; i++) {
                                    if (regradiobuttons[i].checked) {
                                        var regradiobuttonsvalue = regradiobuttons[i].value;
                                    }
                                }
                                let reguser = {
                                    name: regname,
                                    email: regmail,
                                    contact: regcontact,
                                    education: regedu,
                                    university: reguni,
                                    course: regcourse,
                                    modeofinstruction: regradiobuttonsvalue,
                                };
                                let stringFormData = JSON.stringify(reguser);
                                fetch("https://hackproinfosolutionserver.onrender.com/register", {
                                    method: "POST",
                                    mode: "cors",
                                    headers: {
                                        "Content-Type": "Application/JSON",
                                    },
                                    body: stringFormData,
                                }).then((res) => {
                                    if (res.status == 400) {
                                        res.json().then((data) => {
                                            console.log(data);
                                            if (data.err) {
                                                var errorlog = document.getElementById("errorlog");
                                                errorlog.innerHTML = data.err;
                                                errorlog.classList.add("visible");
                                                function fadein() {
                                                    errorlog.classList.remove("visible");
                                                }
                                                setTimeout(fadein, 10000);
                                            }
                                        });
                                    }
                                    if (res.status != 400) {
                                        console.log("Sucessful registration. Redirecting...")
                                        window.location.replace("https://hackproinfosolution.onrender.com/SuccessRegistration");
                                    }
                                });
                            });
                    })
                }
            </div>
        </div>
    );
};

export default Registrationform;
