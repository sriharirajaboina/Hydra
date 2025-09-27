import React from "react"
import hydravr from "../assets/About/hydraVr.png"
const About=()=>{
    return (
        <>
            <div className="mt-15 mx-10 lg:mt-20 lg:mx-21">
                <div className="flex flex-col md:flex-row items-center md:items-star 
                justify-between text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center md:items-center">
                        <h2 >
                            <span className="text-center md:flex font-bold text-[#ffffff] text-4xl">
                                INTRODUCTION</span><br/>
                            <span className="font-light text-[#ffffff] text-4xl font-[300]">TO HYDRA VR</span>
                        </h2>
                        <span className="hidden md:flex ml-15 text-[#ffffff] text-5xl mt-2 md:mt-10">&#8594;</span>
                    </div>
                    <div className="hidden md:flex w-[43%]  md:ml-5">
                        <p className="text-[#ffffff] text-base">
                            Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </p>
                    </div>  
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between mt-20">
                    <div className="mb-10 md:mb-0">
                        <img src={hydravr} alt="hydrave" className="w-full h-auto 
                        max-w-sm md:max-w-lg rounded-tl-[240px] rounded-tr-[100px]
                        rounded-br-[240px] rounded-bl-[100px]"/>
                    </div>
                    <div className="w-full md:w-[43%] md:text-left md:ml-10 ">
                        <h2 className="md:mb-8">
                            <span className="hidden md:flex font-bold text-[#ffffff] text-4xl">ABOUT</span>
                            <br/>
                            <span className="hidden md:flex font-light text-[#ffffff] text-4xl font-[300]">HYDRA VR</span>
                        </h2>
                        <p className="text-[#ffffff] text-base ">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla phar
                            etradiam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi  
                            n tempor.
                        </p>
                        <div className="text-center">
                            <button className="mt-10 font-bold px-8 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full">
                                LET"S GET IN TOUCH
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About