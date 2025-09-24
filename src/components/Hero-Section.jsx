import React from "react";
import logo from "../assets/Hero/logo.png"
import vr from "../assets/Hero/VR.png"
import location from "../assets/Hero/location.png"
import phone from "../assets/Hero/phone.png"
import message from "../assets/Hero/message.png"
const Hero=()=>{
    return(
        <>
          <nav>
            <div>
                <img src={logo} alt="hydra-logo"/>
                <h1>HYDRA</h1>
            </div>
            <div>
                <ul>
                    <li>ABOUT</li>
                    <li>SERVICE</li>
                    <li>TECHNOLOGIES</li>
                    <li>HOW TO</li>
                </ul>
            </div>
            <div>
                <button>CONTACT US</button>
                <button>JOIN HYDRA</button>
            </div>
            </nav> 
            <div>
                <div>
                    <div>
                        <h2>
                           <span>Dive </span> Into The Depths<br/>
                            Of <span>Virtual Reality</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore 
                            nisl tincidunt eget. Lectus mauris eros in vitae .</p>
                        <div>
                            <button>BUILD YOUR WORLD</button>
                            <span>&#8594;</span>
                        </div>
                    </div>
                    <div>
                        <img src={vr} alt="Vr-img"/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={location} alt="loc-img"/>
                        <div>
                            <h3>Pay Us a Visit</h3>
                            <p>Union St, Seattle, WA 98101, United States</p>
                        </div>
                    </div>
                    <div>
                        <img src={phone} alt="phone-img"/>
                        <div>
                            <h3>Give Us a Call</h3>
                            <p>(110) 1111-1010</p>
                        </div>
                    </div>
                    <div>
                        <img src={message} alt="msg-img"/>
                        <div>
                            <h3>Send Us a Message</h3>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero