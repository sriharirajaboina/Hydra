import React,{useState, useRef} from "react";
import {motion} from "framer-motion"
import curve1 from "../assets/Hero/curve1.png"
import curveLeft from "../assets/Hero/curve-left.png"
import curveRight from "../assets/Hero/curve-right.png"
import curveCenter from "../assets/Hero/curve-center.png"
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
        const handleNext=()=>{
            if(currentIndex<contactItems.length-1){
                setCurrentIndex(currentIndex+1)
            }
        };
    return(
        <>
        <div className="relative mt-13 mx-10 lg:mt-13 lg:mx-21">
          <motion.nav 
            initial={{y:-50,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,ease:"easeOut"}}
            className="flex justify-between items-center">
            <motion.div 
             initial={{opacity:0,x:-50}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.8}}
             className="flex justify-between items-center ">
                <img src={logo} alt="hydra-logo" className="w-25 h-25"/>
                <img src={brand} alt="brand-img" className="w-19 h-12 ml-4"/>
            </motion.div>
            <div >
                <ul className="hidden xl:flex justify-between text-white font-bold
                space-x-10 font-montserrat cursor-pointer">
                    {["ABOUT","Service","TECHNOLOGIES","HOW TO"].map((item,i)=>(
                        <motion.li
                         key={i}
                         initial={{opacity:0,y:-30}}
                         whileInView={{opacity:1,y:0}}
                         transition={{type: "tween",duration:1,delay:i*0.2}}
                         whileHover={{scale:1.1,color:"#c0b7e8"}}>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="hidden xl:flex font-montserrat text-white font-bold space-x-5">
                <motion.button 
                 whileHover={{scale:1.1}}
                 className="border-1 px-6 py-3 rounded-full ">
                    CONTACT US
                </motion.button>
                <motion.button 
                 whileHover={{scale:1.1,boxShadow:"0px 0px 15px #8176af"}}
                 className="px-6 py-3 rounded-full text-black"
                 style={{ background: 'linear-gradient(to right, #8176AF, #C0B7E8)' }}>
                    JOIN HYDRA
                </motion.button>
            </div>
            <motion.div
             initial={{opacity:0,x:30}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:0.6}} 
             className="xl:hidden">
                <img src={menu} alt="menu" className="w-10 h-10"
                />
            </motion.div>
            </motion.nav> 
        </div>
            <div className="mt-10 mx-10 lg:mx-21 mt-25">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="relative w-full">
                        <img
                            src={curve1}
                            alt="curve background"
                            className="hidden md:block w-[200px] md:h-[600px]
                            absolute -z-10 top-1 left-1 -translate-x-1/2 -translate-y-1/4 opacity-80"
                        />
                        <motion.div 
                        className="relative z-10 md:text-4xl">
                            <motion.h2 
                            initial={{opacity:0,x:-60}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:0.6}}
                            className="text-[20px] font-bold mb-6 
                                text-[#ffffff] sm:text-[30px] md:text-[40px]">
                            <span className="text-2xl bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                            bg-clip-text text-transparent md:text-5xl"
                            >Dive </span> Into The Depths<br/> Of  
                                <span className="text-2xl bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                                bg-clip-text text-transparent md:text-5xl"> Virtual Reality </span>
                            </motion.h2>
                            <motion.p 
                            initial={{opacity:0,x:-60}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:1}}
                            className="hidden md:flex text-[#ffffff] md:w-[80%] xl:w-[58%] text-base ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                nisl tincidunt eget. Lectus mauris eros in vitae .
                            </motion.p>
                            <motion.div 
                            initial={{opacity:0,x:-60}}
                            whileInView={{opacity:1,x:0}}
                            transition={{duration:1.4}}
                            whileHover={{scale:1.02}}
                            className="mt-10 flex items-center">
                                <motion.button
                                whileHover={{boxShadow:"0 0 15px #8176af"}} 
                                transition={{duration:1.4}}
                                className=" px-18 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                                    rounded-full font-bold text-[#343045] text-xs
                                    md:px-10 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                                    rounded-full font-bold text-[#343045] text-xs">
                                    BUILD YOUR WORLD
                                </motion.button>
                                <motion.img 
                                src={arrow} alt="arrow" 
                                className="hidden md:flex ml-6 w-11 h-8"
                                animate={{x:[0,15,0]}}
                                transition={{repeat:Infinity,duration:3}}/>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="relative flex justify-center items-center ml-5 mb-10 md:ml-5">

                        <img
                            src={curveLeft}
                            alt="curve left"
                            className=" absolute left-[50px] top-1/2 -translate-y-1/2 opacity-80  w-[200px]  md:w-[350px] h-[750px] "
                        />
                        <img
                            src={curveRight}
                            alt="curve right"
                            className=" absolute right-[-60px] top-1/2 -translate-y-1/2 opacity-80  w-[200px]  md:w-[350px] h-[750px]"
                        />
                        <img
                            src={curveCenter}
                            alt="curve center"
                           className=" absolute top-1/2 -translate-x-1/3 translate-x-1/3-translate-y-1 
                                        opacity-80 w-[200px]  md:w-[350px] h-[350px]"

                        />
                        <motion.div 
                        initial={{scale:0.8,opacity:0}}
                        animate={{scale:1,opacity:1}}
                        transition={{type:"spring",stiffness:100,damping:20}}
                        className="relative 
                        ">
                            <motion.img 
                            src={vr} alt="Vr-img" 
                            className="w-full h-auto max-w-sm md:max-w-xl 
                            rounded-tl-[100px] rounded-tr-[100px] 
                            rounded-br-[100px] rounded-bl-[240px] 
                            outline outline-[10px] outline-[#0D0D0D66]"
                            // animate={{y:[0,-50,0]}}
                            // transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}
                            />
                        </motion.div>
                    </div>
                </div>
                <div className="mt-20 px-8 py-6 flex items-center justify-between 
                        bg-[radial-gradient(circle,_#3A3456F2_0%,_#211E2E_95%)] 
                        rounded-full">
                    <motion.div 
                      initial={{opacity:0,scale:0.5}}
                      whileInView={{opacity:1,scale:1}}
                      transition={{duration:0.8}}
                       viewport={{once:true,amount:0.7}}
                      className="relative flex justify-center items-center  md:hidden overflow-hidden">
                        <div
                         ref={containerRef}
                        className="flex transition-transform duration-500"
                        style={{transform:`translateX(-${currentIndex*100}%)`}}>
                        {contactItems.map((item,id)=>(
                            <div key={id}
                            className="flex-shrink-0 w-full flex items-center ml-15">
                                <img src={item.icon} alt="icon"
                                className="w-8 h-8 flex justify-center items-center sm:w-12 h-12 "/>
                                <div className="ml-5 text-[#ffffff] flex flex-col justify-center items-center">
                                    <h3 className="font-bold  text-sm ">
                                        {item.title}
                                    </h3>
                                    <p className="w-[60%] text-sm font-[300] sm:w-full ">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        </div>
                        <button
                            onClick={handlePrev}
                            className="absolute left-1 top-1/2 -translate-y-1/2 text-[#ffffff] w-8 h-8
                            flex items-center justify-center p-2 mr-5 
                            bg-transparent border-3 border-[#ffffff] rounded-full cursor-pointer ">
                            <span className="text-5xl leading-none mb-3"> ‹</span>
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer
                            flex items-center justify-center p-2 ml-15 
                            bg-transparent border-3 border-[#ffffff] text-[#ffffff] rounded-full">
                               <span className="text-5xl mb-3"> ›</span>
                        </button>
                    </motion.div>

                    <div className="hidden md:flex justify-around items-center
                       w-full text-[#ffffff]">
                        {contactItems.map((item,id)=>(
                            <motion.div 
                              key={id}
                              initial={{opacity:0,y:30}}
                              whileInView={{opacity:1,y:0}}
                              transition={{type:"tween",delay:id*0.3,duration:0.8}}
                              viewport={{once:true,amount:0.5}}
                              className="relative flex items-center space-x-6 p-4">
                        
                                <img src={item.icon} alt="icon-des"
                                className="w-12 h-12"/>
                                <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="lg:text-sm xl:text-base font-[300]" >{item.description}</p>
                                </div>
                                <div className="absolute right-0 top-0 h-full w-[2px] 
                                bg-gradient-to-b from-[#343045] via-[#C0B7E8] via-[#8176AF] to-[#343045]" />

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

