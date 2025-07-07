import React from 'react'
import { motion } from 'framer-motion'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <motion.div
        className='flex items-center justify-center mt-20'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className='text-[#CED4D7] text-4xl font-bold font-mono' id='intro-text'>
          KNOW WHO <span className='text-white font-extrabold'>I'M </span>
        </h1>
      </motion.div>

      <motion.div
        className="about-parent flex items-center justify-center gap-40 mt-20 flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className='about-child-1 space-y-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className='text-[#CED4D7] text-lg'>
            Hi Everyone, I am <span className='text-white font-bold'>Hassaan Shakil</span> from <span className='text-white font-bold'>Karachi,Pakistan.</span><br />
            I'm a <span className='text-white font-bold'>Front-end Developer</span> currently enrolled at <span className='text-white font-bold'>SMIT</span>, where <br />
            I'm learning and expanding my skills in modern web <br />
            technologies. I'm passionate about building <span className='text-white font-bold'>clean, user friendly <br />interfaces</span> and exploring new trends in front-end development.
          </p>

          <p className="text-[#CED4D7] text-lg mt-10">
            Apart from coding, here are a few activities I love to do:
          </p>

          <ul className="list-disc list-inside text-[#fff] space-y-1 text-lg">
            <li>Traveling</li>
            <li>Reading Tech Blogs</li>
            <li>Learning New Skills</li>
          </ul>
        </motion.div>

        <motion.div
          className='about-child-2'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <img
            src="https://github.com/mabdullahjs/Portfolio-Using-ReactJs/blob/master/src/Assets/about.png?raw=true"
            alt="About"
            className="filter grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
            id='about-icon'
          />
        </motion.div>
      </motion.div>

      <motion.div
        className='flex items-center justify-center'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h1 className='text-[#CED4D7] text-4xl font-bold font-mono mt-20' id='intro-text'>
          PROFESSIONAL <span className='text-white font-extrabold'>SKILLSET</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false ,amount:0.4}}
      >
        <TechStack TechStackIcon={"https://eki.my.id/html.svg"} Language={"HTML 5"} />
      </motion.div>
      <Footer />
    </>
  )
}

export default About
