import React from "react"
import hydravr from "../assets/About/hydraVr.png"
const About=()=>{
    return (
        <>
            <div>
                <div>
                    <div>
                        <h2>
                            INTRODUCTION<br/>
                            TO HYDRA VR
                        </h2>
                        <span>&#8594;</span>
                    </div>
                    <div>
                        <img src={hydravr} alt="hydrave"/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </p>
                    </div>
                    <div>
                        <h2>ABOUT
                            <br/>
                            <span>HYDRA VR</span>
                        </h2>
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdietsed.
                            Consequat semper viverra nam libero justo laoreet sit amet. Aliquametiam 
                            erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra 
                            diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
                        </p>
                        <button>
                            LET"S GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About