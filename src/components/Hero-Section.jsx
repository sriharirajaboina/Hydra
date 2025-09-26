import React,{useState, useRef} from "react";
import logo from "../assets/Hero/logo.png"
import brand from "../assets/Hero/brand.png"
import vr from "../assets/Hero/VR.png"
import location from "../assets/Hero/location.png"
import phone from "../assets/Hero/phone.png"
import message from "../assets/Hero/message.png"
import arrow from "../assets/Hero/arrow.png"
import menu from "../assets/Hero/humbergs.png"
const Hero=()=>{
    
        const [currentIndex,setCurrentIndex]=useState(false)
        const containerRef=useRef(null)

        const contactItems=[
            {
                title:"Pay us a Visit",
                description:"Union St, Seattle, WA 98101, United States",
                icon:location
            },
            {
                title:"Give Us a Call",
                description:"(110) 1111-1010",
                icon:phone,
            },
            {
                title: "Send Us a Message",
                description: "Contact@HydraVTech.com",
                icon: message,
            },
        ];
        const handlePrev=()=>{
            if(currentIndex>0){
                setCurrentIndex(currentIndex-1);
            }
        };
        const handleNexr=()=>{
            if(currentIndex<contactItems.length-1){
                setCurrentIndex(currentIndex+1)
            }
        };
    return(
        <>
        <div className="mt-13 mx-10 lg:mt-13 lg:mx-21">
          <nav className="flex justify-between items-center">
            <div className="flex justify-between items-center ">
                <img src={logo} alt="hydra-logo" className="w-25 h-25"/>
                <img src={brand} alt="brand-img" className="w-19 h-12 ml-4"/>
            </div>
            <div >
                <ul className="hidden xl:flex justify-between text-white font-bold
                space-x-10 font-montserrat">
                    <li >ABOUT</li>
                    <li >SERVICE</li>
                    <li >TECHNOLOGIES</li>
                    <li >HOW TO</li>
                </ul>
            </div>
            <div className="hidden xl:flex font-montserrat text-white font-bold space-x-5">
                <button className="border-1 px-6 py-3 rounded-full">
                    CONTACT US</button>
                <button className="px-6 py-3 rounded-full text-black"
                 style={{ background: 'linear-gradient(to right, #8176AF, #C0B7E8)' }}>
                    JOIN HYDRA</button>
            </div>
            <div className="xl:hidden">
                <img src={menu} alt="menu" className="w-10 h-10"
                />
            </div>
            </nav> 
        </div>
            <div className="mt-10 mx-10 lg:mx-21 mt-25">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="text-6xl md:text-4xl">
                        <h2 className="text-[40px] font-bold mb-6 
                            text-[#ffffff]">
                           <span className="text-5xl
                                bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent"
                           >Dive </span> Into The Depths<br/> Of 
                            <span className="text-5xl
                                bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] bg-clip-text text-transparent
                            "> Virtual Reality</span>
                        </h2>
                        <p className="hidden md:flex text-[#ffffff] md:w-[80%] xl:w-[58%] text-base ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                        <div className="mt-10 flex items-center">
                            <button className=" px-25 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                            rounded-full font-bold text-[#343045] text-xs
                            md:px-10 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                            rounded-full font-bold text-[#343045] text-xs">
                                BUILD YOUR WORLD</button>
                            <img src={arrow} alt="arrow" 
                            className="hidden md:flex ml-6 w-11 h-8"/>
                        </div>
                    </div>
                    <div className="ml-5 mb-10 md:ml-5">
                        <img src={vr} alt="Vr-img" className="w-150 h-115 
                        rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[240px]
                        "/>
                    </div>
                </div>
                <div className="mt-20 px-6 py-10 flex items-center justify-between 
                        bg-[radial-gradient(circle,_#3A3456F2_0%,_#211E2E_95%)] rounded-full">
                    <div className="relative md:hidden overflow-hidden">
                        <div
                         ref={containerRef}
                        className="flex transition-transform duration-500"
                        style={{transform:`translateX(-${currentIndex*100}%)`}}>
                        {contactItems.map((item,id)=>(
                            <div key={id}
                            className="flex-shrink-0 w-full flex items-center">
                                <img src={item.icon} alt="icon"
                                className="w-12 h-12"/>
                                <div className="ml-5 text-[#ffffff]">
                                    <h3 className="font-bold  text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-base font-[300] ">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        ))}
                        </div>
                    </div>
                    <button
                        onClick={handlePrev}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ffffff]
                        bg-white rounded-full p-2">
                              ‹
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero

