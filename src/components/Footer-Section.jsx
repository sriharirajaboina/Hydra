import React from "react"
import logo from "../assets/Hero/logo.png"
import twitter from "../assets/Footer/twitter.png"
import youtube from "../assets/Footer/youtube.png"
import facebok from "../assets/Footer/facebok.png"
import instagram from "../assets/Footer/instagram.png"
import linkedin from "../assets/Footer/linedin.png"
import pinterest from "../assets/Footer/pinterest.png"
const Footer=()=>{
    return(
        <>
            <div className="mt-10 mx-21 md:mt-20">
                <div className="flex flex-col  md:flex-row justify-between py-10 flex-wrap mb-5 md:space-y-15 lg:space-y-0 ">
                    <div className="flex justify-center md:justify-start mt-6 md:mt-0">
                        <img src={logo} alt="logo" className="w-40 h-auto"/>
                    </div>
                    <div className="hidden  md:block text-[#ffffff]">
                        <ul className="font-bold space-y-5 mx-10">
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>TECHNOLOGIES</li>
                            <li>HOE TO</li>
                            <li>JOIN HYDRA</li>
                        </ul>
                    </div>
                    <div className="hidden md:block text-[#ffffff]">
                        <ul className="font-bold space-y-5 mx-10">
                            <li>F.A.Q</li>
                            <li>SITEMAP</li>
                            <li>CONDITIONS</li>
                            <li>LICENSES</li>
                        </ul>
                    </div>
                    <div className="mt-15 text-center text-[#ffffff] mx-10 md:mt-0">
                        <h3 className="font-bold">
                            SOCIALIZE WITH HYDRA</h3>
                        <div className="mt-6 flex items-center justify-center text-center space-x-4">
                            <img src={facebok} alt="facebok" className="w-8 h-8"/>
                            <img src={twitter} alt="twitter" className="w-8 h-8"/>
                            <img src={linkedin} alt="linkedin" className="w-8 h-8"/>
                            <img src={youtube} alt="youtube" className="w-8 h-8"/>
                            <img src={instagram} alt="insta" className="w-8 h-8"/>
                            <img src={pinterest} alt="pinterest" className="w-8 h-8"/>
                        </div>
                        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                        rounded-full text-[#343045] text-xs font-bold ">
                            BUILD YOUR WORLD</button>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute w-full h-1 
                    bg-gradient-to-r from-[#343045] via-[#C0B7E8] via-[#8176AF] to-[#343045]"></div>
                    <h3 className="leading-loose text-[#ffffff] text-center py-10 font-bold">
                        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Footer