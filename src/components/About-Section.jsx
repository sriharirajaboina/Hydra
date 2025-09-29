import React from "react"
import {motion} from "framer-motion"
import hydravr from "../assets/About/hydraVr.png"
const About=()=>{
    return (
        <>
            <div className="mt-15 mx-10 lg:mt-20 lg:mx-21">
                <motion.div 
                  initial={{opacity:0,y:50}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true,amount:0.7}}
                  className="flex flex-col md:flex-row items-center md:items-star 
                  justify-between text-center md:text-left">
                    <motion.div className="flex flex-col md:flex-row items-center md:items-center">
                        <motion.h2 >
                            <motion.span
                             className="text-center md:flex font-bold text-[#ffffff] text-4xl"
                             initial={{opacity:0,x:-30}}
                             whileInView={{opacity:1,x:0}}
                             transition={{delay:0.2,duration:0.8}}>
                                    INTRODUCTION <br/>
                            </motion.span>
                            <motion.span
                            className="font-light text-[#ffffff] text-4xl font-[300]"
                            initial={{opacity:0,x:30}}
                            whileInView={{opacity:1,x:0}}
                            transition={{delay:0.4,duration:0.8}}>
                                    TO HYDRA VR
                            </motion.span>
                        </motion.h2>
                        <motion.span
                          initial={{opacity:0,scale:0}}
                          whileInView={{opacity:1,scale:1}}
                          transition={{delay:0.6,duration:0.6}} 
                          className="hidden md:flex ml-15 text-[#ffffff] text-5xl mt-2 md:mt-10">
                            &#8594;
                        </motion.span>
                    </motion.div>
                    <motion.div
                      
                      className="hidden md:flex w-[43%]  md:ml-5">
                        <motion.p 
                         initial={{opacity:0,y:30}} 
                         whileInView={{opacity:1,y:0}}
                         viewport={{once:true,amount:0.5}}
                         transition={{delay:0.8,duration:0.8}}
                         className="text-[#ffffff] text-base">
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </motion.p>
                    </motion.div>  
                </motion.div>
                <div className="flex flex-col md:flex-row items-center justify-between mt-20">
                    <motion.div
                      initial={{opacity:0,scale:0.8}}
                      whileInView={{opacity:1,scale:1}}
                      viewport={{once:true,amount:0.7}}
                      transition={{duration:0.8}}
                      whileHover={{scale:1.1,rotate:5}} 
                      className="mb-10 md:mb-0">
                        <img src={hydravr} alt="hydrave" className="w-full h-auto 
                        max-w-sm md:max-w-lg rounded-tl-[240px] rounded-tr-[100px]
                        rounded-br-[240px] rounded-bl-[100px]"/>
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,x:-50}}
                      whileInView={{opacity:1,x:0}}
                      viewport={{once:true,amount:0.7}}
                      trnasition={{type:"tween",delay:0.6,transition:0.8}}
                      className="w-full md:w-[43%] md:text-left md:ml-10 ">
                        <h2 className="md:mb-8">
                            <motion.span 
                            initial={{opacity:0,x:50}}
                            whileInView={{opacity:1,x:0}}
                            viewport={{once:true,amount:0.7}}
                            trnasition={{delay:0.2,transition:0.8}}
                             className="hidden md:flex font-bold text-[#ffffff] text-4xl">
                                ABOUT
                            </motion.span>
                            <br/>
                            <motion.span 
                                initial={{opacity:0,x:-50}}
                                whileInView={{opacity:1,x:0}}
                                viewport={{once:true,amount:0.7}}
                                trnasition={{delay:0.6,transition:0.8}}
                               className="hidden md:flex font-light text-[#ffffff] text-4xl font-[300]">
                                HYDRA VR
                            </motion.span>
                        </h2>
                        <motion.p 
                         initial={{opacity:0,x:-50}}
                          whileInView={{opacity:1,x:0}}
                          viewport={{once:true,amount:0.7}}
                          transition={{delay:0.4,transition:0.8}}
                          className="text-[#ffffff] text-base ">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla phar
                            etradiam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi  
                            n tempor.
                        </motion.p>
                        <motion.div className="text-center md:text-left">
                            <motion.button
                             initial={{opacity:0,y:-50}}
                             whileInView={{opacity:1,y:0}}
                              whileHover={{scale:1.1,boxshadow:"0px 0px 15px #8176af"}}
                              transition={{duration:0.3}} 
                              className="mt-10 font-bold px-8 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full">
                                LET"S GET IN TOUCH
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About