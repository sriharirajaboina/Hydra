import React from "react"
import tech from "../assets/Tech/tech.png"
import unreal from "../assets/Tech/unreal.png"
import unity from "../assets/Tech/unity.png"
import oculus from "../assets/Tech/oculus.png"
import vive from "../assets/Tech/vive.png"
import arrow from "../assets/Tech/techarrow.png"

const Tech=()=>{
    return(
        <>
        <div className="mt-20 mx-21">
            <div className="relative w-fit ">
                <img src={tech} alt="tech" className="w-auto h-80 rounded-full"/>
                <div className="absolute inset-0 flex flex-col 
                items-center justify-center text-center">
                    <h2 className="text-[#ffffff] text-2xl mt-35">
                    <span className="font-bold ">
                        TECHNOLOGIES & HARDWARE </span> <br/>
                        <span className="font-[300]">USED BY HYDERA VR</span></h2>
                    <button className="w-10 h-10 bg-gradient-to-r from -[#8176AF] to-[#C0B7E8] rounded-full mt-25">
                         <img src={arrow} alt="techarrow"/></button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <img src={unreal} alt="unreal" className="w-44 h-auto"/>
                <img src={unity} alt="unity" className="w-63 h-auto"/>
                <img src={oculus} alt="oculus" className="w-65 h-auto"/>
                <img src={vive} alt="vive" className="w-70 h-auto"/>
            </div>
        </div>
        </>
    )
}

export default Tech