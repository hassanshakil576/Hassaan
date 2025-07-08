import React from 'react'
import { motion } from 'framer-motion'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'
import AboutImg from "../assets/About.png"

function About() {
  return (
    <>
      <motion.div
        className='flex items-center justify-center mt-20 px-4 text-center'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className='text-[#CED4D7] text-3xl md:text-4xl font-bold font-mono'>
          KNOW WHO <span className='text-white font-extrabold'>I'M</span>
        </h1>
      </motion.div>

      <motion.div
        className="about-parent flex flex-col md:flex-row items-center justify-center gap-10 md:gap-40 mt-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        
        <motion.div
          className='about-child-1 space-y-6 md:mx-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className='text-[#CED4D7] text-base md:text-lg'>
            Hi Everyone, I am <span className='text-white font-bold'>Hassaan Shakil</span> from <span className='text-white font-bold'>Karachi, Pakistan.</span><br />
            I'm a <span className='text-white font-bold'>Front-end Developer</span> currently enrolled at <span className='text-white font-bold'>SMIT</span>, where <br />
            I'm learning and expanding my skills in modern web <br />
            technologies. I'm passionate about building <span className='text-white font-bold'>clean, user-friendly <br />interfaces</span> and exploring new trends in front-end development.
          </p>

          <p className="text-[#CED4D7] text-base md:text-lg mt-6">
            Apart from coding, here are a few activities I love to do:
          </p>

          <ul className="list-disc list-inside text-[#fff] space-y-1 text-base md:text-lg">
            <li>Traveling</li>
            <li>Reading Tech Blogs</li>
            <li>Learning New Skills</li>
          </ul>
        </motion.div>

        <motion.div
          className='about-child-2 w-[90%] md:w-[45%] mx-auto md:mx-0'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <img
            src={AboutImg}
            alt="About"
            className="w-64 md:w-[400px] filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer mx-auto"
            id='about-icon'
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='flex items-center justify-center px-4 mt-20 text-center'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className='text-[#CED4D7] text-3xl md:text-4xl font-bold font-mono'>
          PROFESSIONAL <span className='text-white font-extrabold'>SKILLSET</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <TechStack TechStackIcon={"https://eki.my.id/html.svg"} Language={"HTML 5"} />
      </motion.div>

      <Footer />
    </>
  )
}

export default About
