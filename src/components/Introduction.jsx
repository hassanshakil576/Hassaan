import React from 'react'
import { motion } from "framer-motion";
import ProfileImg from "../assets/Profile.jpg"

function Introduction() {
    return (
        <>
            <motion.div
                className='flex items-center justify-center mt-40 px-4 text-center'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <h1 className='text-[#CED4D7] text-3xl md:text-5xl font-bold font-mono' id='intro-text'>
                    LET ME <span className='text-white font-extrabold'>INTRODUCE </span> MYSELF
                </h1>
            </motion.div>

            <motion.div
                className="parent mt-20 flex flex-col md:flex-row items-center justify-evenly gap-10 px-4"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false }}
            >
                <motion.div
                    className='child-1 space-y-6 w-[90%] md:w-[50%] text-center md:text-left'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <p className='text-[#CED4D7] text-md md:text-lg'>
                        Hi, I'm <span className='text-white font-bold'>Hassaan Shakil</span> — a passionate <span className='text-white font-bold'>front-end developer</span> 💻 who loves crafting <br />
                        clean and interactive user interfaces using modern web technologies ⚙️.
                    </p>

                    <p className='text-[#CED4D7] text-md md:text-lg'>
                        My primary focus is building <span className='text-white font-bold'>responsive, fast,</span> and <span className='text-white font-bold'>accessible</span> websites. I enjoy <br />
                        bringing designs to life with <span className='font-bold text-white'>pixel-perfect precision</span> 🎯 and <span className='text-white font-bold'>smooth user experiences</span> ✨.
                    </p>

                    <p className='text-[#CED4D7] text-md md:text-lg'>
                        I'm always exploring new <span className='text-white font-bold'>front-end tools</span> 🧰 and love solving UI challenges with creative <br />
                        solutions 🎨. From <span className='text-white font-bold'>landing pages to web apps</span> 📱, I focus on building clean and functional designs.
                    </p>
                </motion.div>

                <motion.div
                    className="child-2"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    <img
                        src={ProfileImg}
                        alt="Profile"
                        className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full object-cover border-2 border-[#CED4D7] shadow-lg hover:rotate-x-12 transition duration-300 mx-auto"
                    />
                </motion.div>
            </motion.div>

            <motion.div
                className='flex justify-center items-center mt-10 mb-10 text-center px-4'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <p className='text-2xl md:text-3xl text-white font-bold'>
                    FIND ME ON
                </p>
            </motion.div>
        </>
    )
}

export default Introduction
