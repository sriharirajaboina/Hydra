import React,{useState,useRef}from "react"
import {motion,AnimatePresence} from "framer-motion"
import simulation from "../assets/Service/simulation.png"
import education from "../assets/Service/education.png"
import self from "../assets/Service/self.png"
import outdoor from "../assets/Service/outdoor.png"
const Service =()=>{
    const [currentSlide,setCurrentSlide]=useState(0);
    // const serviceRef=useRef(null);

    const Services=[
        {
            icon:simulation,
            title:"SIMULATION",
            description:"Vitae sapien pellentesque habitant morb inunc. Viverra aliquet porttitor rhoncuss libero justo laoreet sit amet vitae.",
            button:"TRY IT NOW",
        },
        {
            icon:education,
            title:"EDUCATION",
            description:"Vitae sapien pellentesque habitant morb inunc. Viverra aliquet porttitor rhoncuss libero justo laoreet sit amet vitae.",
            button:"TRY IT NOW",
        },
        {
            icon:self,
            title:"SELF-CARE",
            description:"Vitae sapien pellentesque habitant morb inunc. Viverra aliquet porttitor rhoncuss libero justo laoreet sit amet vitae.",
            button:"TRY IT NOW",
        },
        {
            icon:outdoor,
            title:"OUTDOOR",
            description:"Vitae sapien pellentesque habitant morb inunc. Viverra aliquet porttitor rhoncuss libero justo laoreet sit amet vitae.",
            button:"TRY IT NOW",
        },
    ]

    const handlePrev=()=>{
        if(currentSlide > 0){
            setCurrentSlide(currentSlide-1)
        }
    }
    const handleNext=()=>{
        if(currentSlide < Services.length-1){
            setCurrentSlide(currentSlide+1);
        }
    }

    return(
        <>
            <div className="mt-20 mx-21">
                    <div className="flex flex-col md:flex-row items-center md:items-star 
                        justify-between text-center md:text-left">
                        <div className="flex  text-center  mb-6 md:mb-0">
                            <motion.h2 
                              initial={{opacity:0,x:-50}}
                              whileInView={{opacity:1,x:0}}
                              viewport={{once:true,amount:0.5}}
                              transition={{duration:0.8}}
                              className="text-[#ffffff] text-4xl text-center md:text-left">
                                <span className="font-bold">WHY BUILD</span> <br/>
                                <span className="font-light font-[300]">WITH HYDRA</span>
                            </motion.h2>
                            <motion.span 
                              initial={{opacity:0,scale:0}}
                              whileInView={{opacity:1,scale:1}}
                              viewport={{once:true,amount:0.5}}
                              transition={{type:"tween",duration:0.8,delay:0.3}}
                              className="hidden md:block ml-10 mt-8 text-5xl text-[#ffffff]">
                                &#8594;
                            </motion.span>
                        </div>
                            <motion.p 
                              initial={{opacity:0,y:30}}
                              whileInView={{opacity:1,y:0}}
                              viewport={{once:true,amount:0.5}}
                              transition={{duration:0.8,delay:0.3}}
                              className="hidden md:flex w-[43%] ml-5 text-left text-[#ffffff]">
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </motion.p>
                    </div>
                    <div className="mt-5 flex  justify-between"> 
                        <div className="md:hidden relative w-full flex justify-center mt-8">
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                 key={currentSlide}  
                                 initial={{opacity:0,x:100,scale:0.9}}
                                 whileInView={{opacity:1,x:0,scale:1}}
                                 exit={{opacity:0,x:-100,scale:0.9}}
                                 transition={{duration:0.8}}
                                 whileHover={{scale:1.05}}
                                  className="w-11/12 bg-[radial-gradient(#433D60,#211E2E)] text-center p-6 rounded-4xl space-y-4">
                                    <motion.img 
                                    src={Services[currentSlide].icon}
                                    alt={Services[currentSlide].title}
                                    whileHover={{scale:1.05}}
                                    className="w-52 h-52 rounded-full mx-auto object-contain"/>
                                    <motion.h3 
                                     whileHover={{scale:1.03}}
                                    className="font-bold text-sm text-[#ffffff] py-5 
                                    border-b border-[#ffffff] mx-10 sm:text-base md:text-lg">
                                        {Services[currentSlide].title}
                                    </motion.h3>
                                    <motion.p className="text-[#ffffff] text-sm text-left mx-3">
                                        {Services[currentSlide].description}
                                    </motion.p>
                                    <motion.button 
                                     whileHover={{scale:1.05,boxshadow:"0px 0px 15px #8176AF"}}
                                     transition={{duration:0.5}}
                                     className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                                     rounded-full px-10 py-3 text-[#343045] text-base font-bold">
                                        {Services[currentSlide].button}
                                    </motion.button>
                                </motion.div>
                            </AnimatePresence>
                            <button
                             onClick={handlePrev}
                            className="absolute left-1 top-1/2 -translate-y-1/2 
                            bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] p-2
                            rounded-full w-10 h-10 flex items-center justify-center">
                            <span className="text-[#343045] text-6xl mb-3">&#8249;</span>
                            </button>
                            <button
                            onClick={handleNext}
                            className="absolute right-1 top-1/2 -translate-y-1/2 
                             bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                            p-2 rounded-full w-10 h-10 flex items-center justify-center">
                                <span className="text-[#343045] text-6xl mb-3">&#8250;</span>
                        </button>
                        </div>
                        <div className="hidden md:flex md:flex-wrap md:justify-between gap-6 mt-8">
                            {Services.map((item,i)=>(
                                <motion.div
                                  key={i}
                                  initial={{opacity:0,y:50}}
                                  whileInView={{opacity:1,y:0}}
                                  viewport={{once:true,amount:0.5}}
                                  transition={{duration:0.6,delay:i*0.3}}
                                  whileHover={{scale:1.06,boxShadow:"0px 0px 20px #8176AF"}}
                                  className="bg-[radial-gradient(#433D60,#211E2E)] text-center p-6
                                  space-y-4 rounded-4xl flex-1 min-w-[250px] max-w-[300px]">
                                    <motion.img 
                                    src={item.icon}
                                    alt={item.title}
                                    whileHover={{scale:1.05,rotate:1}}
                                    className="w-full h-40 rounded-full mx-auto object-contain"/>
                                    <motion.h3 
                                     whileHover={{scale:1.02}}
                                    className="font-bold text-2xl text-[#ffffff] 
                                    py-4 border-b border-[#ffffff] mx-10">
                                        {item.title}
                                    </motion.h3>
                                    <motion.p className="text-[#ffffff] text-base">
                                        {item.description}
                                    </motion.p>
                                    <motion.button 
                                     whileHover={{scale:1.05,boxShadow:"0px 0px 15px #8176AF"}}
                                     transition={{duration:0.5}}
                                     className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                                     rounded-full px-8 py-3 text-[#343045] text-xs font-bold">
                                        {item.button}
                                    </motion.button>
                                </motion.div>
                            ))}

                        </div>
                    </div>
            </div>
        </>
    )
}

export default Service