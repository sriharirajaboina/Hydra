import React from "react"

const OptIn=()=>{
    return (
        <>
        <div className="mt-15 mx-21">
            <div className="bg-[radial-gradient(circle,#403A5F,#211E2E)]
        shadow-[0_4px,10px_#00000040] p-10 rounded-[100px]">
                <div className="text-[#ffffff] text-center text-4xl">
                    <h2 className="py-4 font-bold">JOIN HYDRA</h2>
                    <h3 className="font-[300]">Let's Build Your VR Experience</h3>
                </div>
                <form className="mt-15">
                    <div className="flex items-center justify-between gap-4">
                         <input
                            type="text"
                            placeholder="First Name"
                            required
                            className="w-full p-3 border border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            required
                            className="w-full p-3 border border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                         <input
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full p-3 border border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="phone Number"
                            required
                            className="w-full p-3 border border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none"
                        />
                    </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            required
                            className="w-full p-3 border border-[#ffffff] rounded-full bg-transparent placeholder:text-left outline-none mt-4"
                        />
                    <textarea
                        placeholder="Tell Us Something"
                        required
                        className="w-full p-3 border border-[#ffffff] rounded-xl bg-transparent placeholder:text-left outline-none mt-4 min-h-[120px]"
                    ></textarea>
                     <div className="text-center">
                        <button className="mt-10 px-8 py-3 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                        rounded-full text-[#343045] font-bold"
                        >SEND To HYDRA</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default OptIn