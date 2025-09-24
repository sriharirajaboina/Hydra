import React from "react"
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
            <div>
                <div>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <ul>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>TECHNOLOGIES</li>
                            <li>HOE TO</li>
                            <li>JOIN HYDRA</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>F.A.Q</li>
                            <li>SITEMAP</li>
                            <li>CONDITIONS</li>
                            <li>LICENSES</li>
                        </ul>
                    </div>
                    <div>
                        <h3>SOCIALIZE WITH HYDRA</h3>
                        <div>
                            <img src={facebok} alt="facebok"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={linkedin} alt="linkedin"/>
                            <img src={youtube} alt="youtube"/>
                            <img src={instagram} alt="insta"/>
                            <img src={pinterest} alt="pinterest"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>
                        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED 
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Footer