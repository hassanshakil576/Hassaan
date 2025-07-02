import React from 'react'


function Introduction() {
    return (
        <>
            <div className='flex items-center justify-center mt-35'>
                <h1 className='text-[#CED4D7] text-5xl font-bold font-mono' id='intro-text'>LET ME <span className='text-white font-extrabold'>INTRODUCE </span> MYSELF</h1>
            </div>
            <div className="parent mt-20 flex items-center justify-evenly">
                <div className='child-1'>
                    <p className='text-[#CED4D7] text-lg'>
                        Hi, I'm <span className='text-white font-bold'>Hassaan Shakil</span> — a passionate <span className='text-white font-bold'>front-end developer</span> 💻 who loves crafting <br />
                        clean and interactive user interfaces using modern web technologies ⚙️.
                    </p> <br />

                    <p className='text-[#CED4D7] text-lg'>
                        My primary focus is building <span className='text-white font-bold'>responsive, fast,</span> and <span className='text-white font-bold'>accessible</span> websites. I enjoy <br />
                        bringing designs to life with <span className='font-bold text-white'>pixel-perfect precision</span> 🎯 and <span className='text-white font-bold'>smooth user experiences</span> ✨.
                    </p> <br />

                    <p className='text-[#CED4D7] text-lg'>
                        I'm always exploring new <span className='text-white font-bold'>front-end tools</span> 🧰 and love solving UI challenges with creative <br />
                        solutions 🎨. From <span className='text-white font-bold'>landing pages to web apps</span> 📱, I focus on building clean and functional designs.
                    </p>

                </div>
                <div className="child-2">
                    <img
                        src="../src/assets/profile.jpg"
                        alt="Profile"
                        className="w-[250px] h-[250px] rounded-full object-cover border-2 border-[#CED4D7] shadow-lg hover:rotate-x-12 transition duration-300"
                    />

                </div>
            </div>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <p className='text-2xl text-white font-bold'>
                    FIND ME ON
                </p>
            </div>


        </>
    )
}

export default Introduction