import React,{useState} from "react"
import {motion,AnimatePresence} from "framer-motion"

const Process=()=>{
    const [numberSlide,setNumberSlide]=useState(0);

    const steps=[
        {number:"01",title:"3D Conception & Design"},
        {number:"02",title:"Interaction Design"},
        {number:"03",title:"VR World userTesting"},
        {number:"04",title:"Hydra VR Deploy"}
    ];

    const handlePrev=()=>{
        if(numberSlide > 0){
            setNumberSlide(numberSlide -1 );
        }
    }

    const handleNext=()=>{
        if(numberSlide < steps.length - 1){
            setNumberSlide(numberSlide + 1);
        }
    }

    return (
        <>
            <div className="mt-10 mx-4 md:mx-20">
                <motion.div
                  initial={{opacity:0,x:-50}}
                  whileInView={{opacity:1,x:0}}
                  viewport={{once:true,amount:0.5}}
                  transition={{duration:0.8}}
                  className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
                    <h2 className="text-[#ffffff] text-4xl text-center md:text-left">
                        <span className="font-bold">HOW WE BUILD</span><br/>
                        <span className="font-[300]">WITH HYDRA VR?</span>
                    </h2>
                    <motion.span
                      initial={{opacity:0,scale:0}}
                      whileInView={{opacity:1,scale:1}}
                      viewport={{once:true,amount:0.5}}
                      transition={{duration:0.5,delay:0.4}} 
                      className="hidden md:block mt-8 text-5xl text-[#C0B7E8]">
                        &#8594;
                    </motion.span> 
                    <motion.p 
                      initial={{opacity:0,y:30}}
                      whileInView={{opacity:1,y:0}}
                      viewport={{once:true,amount:0.5}}
                      trnasition={{duration:0.6,delay:0.3}}
                      className="hidden md:block w-[50%] text-[#ffffff] text-base font-[400] ml-10 mt-4 md:mt-0">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </motion.p>
                </motion.div>
                <div className="relative">
                    <div className="flex md:hidden item-center justify-center">
                        <button
                        onClick={handlePrev}
                        className="absolute mt-15 mx-5 left-8 top-1/2  -translate-y-1/2 w-8 h-8 rounded-full
                        bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center cursor-pointer">
                            <span className="text-5xl mb-4">&#8249;</span>
                        </button>
                        <AnimatePresence  mode="wait">
                            <motion.div
                             key={numberSlide} 
                             initial={{opacity:0,x:100,scale:0.9}}
                             whileInView={{opacity:1,x:0,scale:1}}
                             exit={{opacity:0,x:-100,scale:0.9}}
                             transition={{duration:0.6}}
                             className="p-6 text-center flex flex-col items-center">
                                <motion.div 
                                 whileHover={{scale:1.1,rotate:5}}
                                 transition={{duration:0.4}}
                                 className="w-28 h-28 flex items-center justify-center rounded-full 
                                 bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] mb-4">
                                    <span className="text-[#343045] text-4xl font-bold"
                                    >{steps[numberSlide].number}</span>
                                </motion.div>
                                <motion.h5
                                 initial={{opacity:0,y:30}}
                                 whileInView={{opacity:1,y:0}}
                                 transition={{duration:0.5,delay:0.2}}
                                 className="w-[70%] text-[#ffffff] font-bold text-lg"
                                 >{steps[numberSlide].title}
                                </motion.h5>
                            </motion.div>
                        </AnimatePresence>
                        <button
                            onClick={handleNext}
                            className="absolute mt-15 mx-5 right-8  mx-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                            bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center cursor-pointer">
                                <span className="text-5xl mb-4">&#8250;</span>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex justify-between mt-10">
                    {steps.map((item,id)=>(
                        <motion.div key={id}
                         initial={{opacity:0,y:50}}
                         whileInView={{opacity:1,y:0}}
                         viewport={{once:true,amount:0.5}}
                         transition={{duration:0.6,delay:id*0.3}}
                         whilehover={{y:-5}}
                         className="flex flex-col items-center">
                            <motion.div 
                             whilehover={{scale:1.1,rotate:5}}
                             transition={{duration:0.5}}
                             className="w-24 h-24 flex items-center justify-center rounded-full
                             bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] mb-4"> 
                            <span className="text-[#343045] text-4xl font-bold">{item.number}</span>
                            </motion.div>
                            <motion.h5 
                             whileHover={{y:-5}}
                             transitio={{duration:0.5}}
                              className="text-[#ffffff] font-bold text-center"
                                >{item.title}
                            </motion.h5>
                        </motion.div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default Process