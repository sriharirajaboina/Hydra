import React from "react"
import {motion} from "framer-motion"
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
                    <motion.div 
                     initial={{opacity:0,y:40}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:0.8}}
                     className="flex justify-center md:justify-start mt-6 md:mt-0">
                        <img src={logo} alt="logo" className="w-40 h-auto"/>
                    </motion.div>
                    <motion.div 
                     initial={{opacity:0,y:30}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:0.6,delay:0.2}}
                     className="hidden  md:block text-[#ffffff]">
                        <ul className="font-bold space-y-5 mx-10">
                            {["ABOUT","SERVICES","TECHNOLOGIES","HOw TO","JOIN HYDRA"].map((item,i)=>(
                                <motion.li
                                key={i}
                                whileHover={{scale:1.1,color:"#c0b7e8"}}
                                transition={{type:"spring",stiffness:200}}
                                className="cursor-pointer">
                                        {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div 
                     initial={{opacity:0,y:30}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:0.6,delay:0.3}}
                     className="hidden md:block text-[#ffffff]">
                        <ul className="font-bold space-y-5 mx-10">
                            {["F.A.Q","SITEMAP","CONDITIONS","LICENSES"].map((item,i)=>(
                                <motion.li
                                key={i}
                                whileHover={{scale:1.1,color:"#c0b7e8"}}
                                transition={{type:"spring",stiffness:200}}
                                className="cursor-pointer">
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div 
                     initial={{opacity:0,y:40}}
                     whileInView={{opacity:1,y:0}}
                     transition={{duration:0.6,delay:0.6}}
                     className="mt-15 text-center text-[#ffffff] mx-10 md:mt-0">
                        <h3 className="font-bold">
                            SOCIALIZE WITH HYDRA</h3>
                        <div className="mt-6 flex items-center justify-center text-center space-x-4">
                            {[facebok,twitter,linkedin,youtube,instagram,pinterest].map((icon,i)=>(
                                <motion.img
                                key={i}
                                src={icon} alt="social"
                                whileHover={{scale:1.2,rotate:10}}
                                transition={{type:"spring",stiffness:300,delay:i * 0.2}}
                                className="w-8 h-8 cursor:pointer"/>
                            ))}
                        </div>
                        <motion.button 
                          whileHover={{scale:1.1,boxShadow:"0 0 20px #8176af"}}
                          whileTap={{scale:1}}
                          transition={{type:"spring",stiffness:250}}
                          className="mt-8 px-8 py-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                          rounded-full text-[#343045] text-xs font-bold ">
                            BUILD YOUR WORLD
                        </motion.button>
                    </motion.div>
                </div>
                <motion.div 
                 initial={{opacity:0}}
                 whileInView={{opacity:1}}
                 transition={{duration:1,delay:0.6}}
                 className="relative">
                    <div className="absolute w-full h-1 
                    bg-gradient-to-r from-[#343045] via-[#C0B7E8] via-[#8176AF] to-[#343045]"></div>
                    <h3 className="w-[80%] leading-loose tracking-wider text-[#ffffff] text-center py-10 font-bold md:w-full">
                        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
                    </h3>
                </motion.div>
            </div>
        </>
    )
}

export default Footer