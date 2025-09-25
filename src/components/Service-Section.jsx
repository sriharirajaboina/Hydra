import React from "react"
import simulation from "../assets/Service/simulation.png"
import education from "../assets/Service/education.png"
import self from "../assets/Service/self.png"
import outdoor from "../assets/Service/outdoor.png"
const Service =()=>{
    return(
        <>
            <div className="mt-20 mx-21">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-content">
                            <h2 className="text-[#ffffff] text-4xl">
                                <span className="font-bold">WHY BUILD</span> <br/>
                                <span className="font-light font-[300]">WITH HYDRA</span>
                            </h2>
                            <span className="ml-10 mt-8 text-5xl text-[#ffffff]">&#8594;</span>
                        </div>
                        <div className="w-[43%]">
                            <p className="text-[#ffffff]">
                                Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                                nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                                quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                                lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                            </p>
                        </div>
                    </div>
                    <div className="mt-25 flex items-center justify-between space-x-4 ">
                        <div className="bg-[radial-gradient(#433D60,#211E2E)] text-center  p-6 space-y-4 rounded-4xl">
                            <img src={simulation} alt="simulation" className="w-48 h-48 rounded-full mx-auto"/>
                            <h3 className="font-bold text-2xl text-[#ffffff] py-4 border-b-1 mx-10">SIMULATION</h3>
                            <p className="text-[#ffffff] text-base">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                            rounded-full px-8 py-3 text-[#343045] text-xs font-bold">
                                TRY IT NOW</button>
                        </div>
                        <div className="bg-[radial-gradient(#433D60,#211E2E)] text-center p-6 space-y-4 rounded-4xl">
                            <img src={education} alt="education" className="w-48 h-48 rounded-full mx-auto"/>
                            <h3 className="font-bold text-2xl text-[#ffffff] py-4 border-b-1 mx-10">EDUCATION</h3>
                            <p className="text-[#ffffff] text-base">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                            rounded-full px-8 py-3 text-[#343045] text-xs font-bold"
                            >TRY IT NOW</button>
                        </div>
                        <div  className="bg-[radial-gradient(#433D60,#211E2E)] text-center p-8 space-y-4 rounded-4xl">
                            <img src={self} alt="self" className="w-48 h-48 rounded-full mx-auto"/>
                            <h3 className="font-bold text-2xl text-[#ffffff] py-4 border-b-1 mx-10">SELF-CARE</h3>
                            <p className="text-[#ffffff] text-base">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]
                             rounded-full px-8 py-3 text-[#343045] text-xs font-bold">
                                TRY IT NOW</button>
                        </div>
                        <div  className="bg-[radial-gradient(#433D60,#211E2E)] text-center p-8 space-y-4 rounded-4xl">
                            <img src={outdoor} alt="outdoor" className="w-48 h-48 rounded-full mx-auto"/>
                            <h3 className="font-bold text-2xl text-[#ffffff] py-4 border-b-1 mx-10">OUTDOOR</h3>
                            <p className="text-[#ffffff] text-base">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.
                            </p>
                            <button className="mt-4 bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] 
                            rounded-full px-8 py-3 text-[#343045] text-xs font-bold"
                            >TRY IT NOW</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Service