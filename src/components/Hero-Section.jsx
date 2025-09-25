import React from "react";
import logo from "../assets/Hero/logo.png"
import brand from "../assets/Hero/brand.png"
import vr from "../assets/Hero/VR.png"
import location from "../assets/Hero/location.png"
import phone from "../assets/Hero/phone.png"
import message from "../assets/Hero/message.png"
import arrow from "../assets/Hero/arrow.png"
const Hero=()=>{
    return(
        <>
        <div className=" mt-13 mx-21">
          <nav className="flex justify-between items-center">
            <div className="flex justify-between items-center ">
                <img src={logo} alt="hydra-logo" className="w-25 h-25"/>
                <img src={brand} alt="brand-img" className="w-19 h-12 ml-4"/>
            </div>
            <div >
                <ul className="flex justify-between text-white font-bold
                space-x-10 font-montserrat">
                    <li >ABOUT</li>
                    <li >SERVICE</li>
                    <li >TECHNOLOGIES</li>
                    <li >HOW TO</li>
                </ul>
            </div>
            <div className="font-montserrat text-white font-bold space-x-5">
                <button className="border-1 px-6 py-3 rounded-full">
                    CONTACT US</button>
                <button className="px-6 py-3 rounded-full text-black"
                 style={{ background: 'linear-gradient(to right, #8176AF, #C0B7E8)' }}>
                    JOIN HYDRA</button>
            </div>
            </nav> 
        </div>
            <div className="mx-21 mt-25">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-[40px] font-bold mb-6 text-[#ffffff]">
                           <span className="text-5xl
                           bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent"
                           >Dive </span> Into The Depths<br/> Of 
                            <span className="text-5xl
                            bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent
                            "> Virtual Reality</span>
                        </h2>
                        <p className="text-[#ffffff] w-[42%] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                        <div className="mt-10 flex items-center">
                            <button className=" bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                            px-6 py-3 rounded-full font-bold text-[#343045] text-xs">
                                BUILD YOUR WORLD</button>
                            <img src={arrow} alt="arrow" 
                            className=" ml-6 w-11 h-8"/>
                        </div>
                    </div>
                    <div className="mr-15">
                        <img src={vr} alt="Vr-img" className="w-150 h-115 
                        rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px]"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-25 px-10 py-10
                bg-[radial-gradient(circle,_#3A3456F2_0%,_#211E2E_95%)] rounded-full">
                    <div className="flex items-center justift-between">
                        <img src={location} alt="loc-img" className="w-18 h-20"/>
                        <div className="ml-4">
                            <h3 className="font-bold text-[#ffffff] text-lg">Pay Us a Visit</h3>
                            <p className="text-sm text-[#ffffff]">Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>
                    <div className="flex items-center justift-between px-25 border-x border-[#ffffff]">
                        <img src={phone} alt="phone-img" className="w-15 h-18"/>
                        <div className="ml-4">
                            <h3 className="font-bold text-[#ffffff] text-lg">Give Us a Call</h3>
                            <p className="text-sm text-[#ffffff]">(110) 1111-1010</p>
                        </div>
                    </div>
                    <div className="flex items-center justift-between">
                        <img src={message} alt="msg-img" className="w-16 h-16"/>
                        <div className="ml-4">
                            <h3 className="font-bold text-[#ffffff] text-lg">Send Us a Message</h3>
                            <p className="text-sm text-[#ffffff]">Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

