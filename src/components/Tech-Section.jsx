import React,{useState} from "react"
import tech from "../assets/Tech/tech.png"
import unreal from "../assets/Tech/unreal.png"
import unity from "../assets/Tech/unity.png"
import oculus from "../assets/Tech/oculus.png"
import vive from "../assets/Tech/vive.png"
import arrow from "../assets/Tech/techarrow.png"

const Tech=()=>{
    const [techSlide,setTechSlide]=useState(0)

    const Technologies=[unreal,unity,oculus,vive]
    const Technologie=[vive,unity,oculus,unreal]

    const techhandlePrev=()=>{
        if(techSlide > 0){
            setTechSlide(techSlide - 1)
        }
    }
    const techhandleNext=()=>{
        if(techSlide < Technologies.length-1){
            setTechSlide(techSlide + 1)
        }
    }
    return(
        <>
        <div className="mt-20 mx-10 md:mx-21">
            <div className="relative w-full max-w-base sm:max-w-base
            md:max-w-4xl lg:max-w-6xl xl:max-w-7xl max-auto">
                <img 
                src={tech} alt="tech" 
                className="w-full h-auto rounded-full onject-contain"/>
                <div className="absolute inset-0 flex flex-col 
                    items-center justify-center text-center">
                    <h2 className="mb-18 text-[#ffffff] text-xl sm:text-2xl 
                    md:text-3xl mt-15 md:mb-15 lg:mb-10">
                    <span className="font-bold ">
                        TECHNOLOGIES & HARDWARE </span> <br/>
                        <span className="font-[300]">USED BY HYDERA VR</span></h2>
                    <button className="absolute left-1/2 bottom-0 transform -translate-x-1/2 
                    translate-y-1/2 w-9 h-9 flex items-center justify-center
                     bg-gradient-to-r from -[#8176AF] to-[#C0B7E8] rounded-full mt-6 shadow-lg md:w-12 md:h-12">
                         <img src={arrow} alt="techarrow" className="w-8 h-8"/>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
                <button 
                onClick={techhandlePrev}
                className="w-12 h-12 flex item-center justify-center 
                bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full 
                text-[#433D60] text-xl cursor-pointer ">
                    <span className="mt-[-14px] text-6xl">&#8249;</span>
                </button>
                <img 
                src={Technologie[techSlide]}
                alt="tech-img"
                className="w-52 h-52 object-contain"/>
                <button 
                onClick={techhandleNext}
                className="w-12 h-12 flex item-center justify-center 
                bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] rounded-full 
                text-[#433D60] text-xl cursor-pointer">
                    <span className="mt-[-14px] text-6xl">&#8250;</span>
                </button>
            </div>
            <div className="hidden md:flex items-center justify-between gap-8 mt-6 flex-wrap mx-25">
                {Technologies.map((item,id)=>(
                    <img
                    key={id}
                    src={item}
                    alt="tech-img"
                    className="w-20 h-20 md:w-38 md:h-38 lg:w-48 lg:h-48 object-contain"/>
                ))}
            </div>
        </div>
        </>
    )
}

export default Tech