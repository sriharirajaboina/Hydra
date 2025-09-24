import React from "react"
import simulation from "../assets/Service/simulation.png"
import education from "../assets/Service/education.png"
import self from "../assets/Service/self.png"
import outdoor from "../assets/Service/outdoor.png"
const Service =()=>{
    return(
        <>
            <div>
                <div>
                    <div>
                        <h2>
                            WHY BUILD <br/>
                            WITH HYDRA
                        </h2>
                        <span>&#8594;</span>
                        <p>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncusurna 
                            neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
                            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pharetra 
                            diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor.
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={simulation} alt="simulation"/>
                            <h3>SIMULATION</h3>
                            <p>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div>
                            <img src={education} alt="education"/>
                            <h3>EDUCATION</h3>
                            <p>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div>
                            <img src={self} alt="self"/>
                            <h3>SELF-CARE</h3>
                            <p>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                        <div>
                            <img src={outdoor} alt="outdoor"/>
                            <h3>OUTDOOR</h3>
                            <p>Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button>TRY IT NOW</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Service