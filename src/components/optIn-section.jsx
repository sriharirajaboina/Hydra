import React from "react"
import {motion} from "framer-motion"

const OptIn=()=>{
    return (
        <>
        <div className="mt-10 mx-15 md:mt-15 md:mx-21">
            <motion.div 
              initial={{opacity:0,scale:0.8}}
              whileInView={{opacity:1,scale:1}}
              transition={{duration:0.8,ease:"easeOut"}}
              viewport={{once:true,amount:0.3}}
              className="bg-[radial-gradient(circle,#403A5F,#211E2E)]
                shadow-[0_4px,10px_#00000040] p-10 rounded-[100px]">
                <motion.div 
                  initial={{opacity:0,y:-40}}
                  whileInView={{opacity:1,y:0}}
                  transition={{duration:0.8}}
                  viewport={{once:true,amount:0.5}}
                  className="text-[#ffffff] text-center text-2xl md:text-4xl">
                    <h2 className="py-4 font-bold">JOIN HYDRA</h2>
                    <h3 className="font-[300]">Let's Build Your VR Experience</h3>
                </motion.div>
                <motion.form 
                 initial={{opacity:0,y:60}}
                 whileInView={{opacity:1,y:0}}
                 transition={{duration:0.8,delay:0.2}}
                 viewport={{once:true,amount:0.5}}
                 className="mt-15 px-5 text-[#ffffff] md:px-18">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                         <motion.input
                          whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                            type="text"
                            placeholder="First Name"
                            required
                            className="w-full p-3 border-2 border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                        <motion.input
                          whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                            type="text"
                            placeholder="Last Name"
                            required
                            className="w-full p-3 border-2 border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row items-center gap-8">
                         <motion.input
                          whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full p-3 border-2 border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                        <motion.input
                          whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                            type="tel"
                            placeholder="phone Number"
                            required
                            className="w-full p-3 border-2 border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                    </div>
                        <motion.input
                          whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                            type="text"
                            placeholder="Subject"
                            required
                            className="mt-8 w-full p-3 border-2 border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none mt-4"
                        />
                    <motion.textarea
                      whileFocus={{scale:1.05,boxShadow:"0 0 15px #8176af"}}
                        placeholder="Tell Us Something"
                        required
                        className="mt-8 w-full p-3 border-2 border-[#ffffff] rounded-xl bg-transparent placeholder:text-left outline-none mt-4 min-h-[120px]"
                    ></motion.textarea>
                     <div className="text-center">
                        <motion.button 
                         whileHover={{scale:1.1,background:"linear-gradient(90deg,#c0b7e8 0%,#8176af 100%"}}
                         whileTap={{scale:1}}
                         transition={{duration:0.5}}
                         className="mt-10 px-4 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                         rounded-full text-[#343045] font-bold mb-10 text-sm sm:px-8 sm:text-base"
                        >SEND TO HYDRA
                    </motion.button>
                    </div>
                </motion.form>
            </motion.div>
        </div>
        </>
    )
}

export default OptIn