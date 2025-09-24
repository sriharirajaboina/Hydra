import React from "react"
import tech from "../assets/Tech/tech.png"
import unreal from "../assets/Tech/unreal.png"
import unity from "../assets/Tech/unity.png"
import oculus from "../assets/Tech/oculus.png"
import vive from "../assets/Tech/vive.png"


const Tech=()=>{
    return(
        <>
            <div>
                <img src={tech} alt="tech"/>
                <h2>TECHNOLOGIES & HARDWARE <br/>
                USED BY HYDERA VR</h2>
            </div>
            <div>
                <img src={unreal} alt="unreal"/>
                <img src={unity} alt="unity"/>
                <img src={oculus} alt="oculus"/>
                <img src={vive} alt="vive"/>
            </div>
        </>
    )
}

export default Tech