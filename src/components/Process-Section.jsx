import React,{useState} from "react"

const Process=()=>{
    const [numberSlide,setNumberSlide]=useState(0);

    const steps=[
        {number:"01",title:"3D Conception & Design"},
        {number:"02",title:"Interaction Design"},
        {number:"03",title:"VR World userTesting"},
        {number:"04",title:"Hydra VR Deploy"}
    ];

    const handlePrev=()=>{
        if(numberSlide > 0){
            setNumberSlide(numberSlide -1 );
        }
    }

    const handleNext=()=>{
        if(numberSlide < steps.length - 1){
            setNumberSlide(numberSlide + 1);
        }
    }

    return (
        <>
            <div className="mt-10 mx-4 md:mx-20">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-10">
                    <h2 className="text-[#ffffff] text-4xl text-center md:text-left">
                        <span className="font-bold">HOW WE BUILD</span><br/>
                        <span className="font-[300]">WITH HYDRA VR?</span>
                    </h2>
                    <span className="hidden md:block mt-8 text-5xl text-[#C0B7E8]">&#8594;</span> 
                    <p className="hidden md:block w-[50%] text-[#ffffff] text-base font-[400] ml-10 mt-4 md:mt-0">
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                            lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                        </p>
                </div>
                <div className="relative">
                    <div className="flex md:hidden item-center justify-center">
                        <button
                        onClick={handlePrev}
                        className="absolute mt-15 mx-5 left-8 top-1/2  -translate-y-1/2 w-8 h-8 rounded-full
                        bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center cursor-pointer">
                            <span className="text-5xl mb-4">&#8249;</span>
                        </button>
                        <div className="p-6 text-center flex flex-col items-center">
                            <div className="w-28 h-28 flex items-center justify-center rounded-full 
                            bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] mb-4">
                                <span className="text-[#343045] text-4xl font-bold"
                                >{steps[numberSlide].number}</span>
                            </div>
                            <h5 className="w-[70%] text-[#ffffff] font-bold text-lg"
                            >{steps[numberSlide].title}</h5>
                        </div>
                        <button
                            onClick={handleNext}
                            className="absolute mt-15 mx-5 right-8  mx-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                            bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] flex items-center justify-center cursor-pointer">
                                <span className="text-5xl mb-4">&#8250;</span>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex justify-between mt-10">
                    {steps.map((item,id)=>(
                        <div key={id}
                        className="flex flex-col items-center">
                            <div className="w-24 h-24 flex items-center justify-center rounded-full
                            bg-gradient-to-r from-[#C0B7E8] to-[#8176AF] mb-4"> 
                            <span className="text-[#343045] text-4xl font-bold">{item.number}</span>
                            </div>
                            <h5 className="text-[#ffffff] font-bold text-center"
                            >{item.title}</h5>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}
export default Process