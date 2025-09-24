import React from "react"

const OptIn=()=>{
    return (
        <>
        <div>
            <div>
                <h2>JOIN HYDRA</h2>
                <h3>Let's Build Your VR Experience</h3>
                <form>
                    <div>
                        <input  type="text" placeholder="First Name" required/>
                    </div>
                     <div>
                        <input  type="text" placeholder="Last Name" required/>
                    </div>
                     <div>
                        <input  type="email" placeholder="Email" required/>
                    </div>
                     <div>
                        <input  type="tel" placeholder="Phone Number" required/>
                    </div>
                     <div>
                        <input  type="text" placeholder="Subject" required/>
                    </div>
                     <div>
                        <textarea  type="text" placeholder="Tell Us Something" required></textarea>
                    </div>
                     <div>
                        <button>SEND To HYDRA</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default OptIn