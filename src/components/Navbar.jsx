import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <motion.div
                className='fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-[#1f1f24]/60 flex justify-between items-center shadow-2xs'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex-shrink-0 m-8">
                    <a className="text-3xl font-bold text-[#CED4D7] bg-clip-text cursor-pointer font-mono">
                        Hassaan.
                    </a>
                </div>
                <div className='m-8'>
                    <ul className='flex gap-6'>
                        <li className="relative group">
                            <Link className='cursor-pointer text-[#CED4D7] group-hover:text-white transition font-bold text-md' to='/'>
                                Home
                                <span className="cursor-pointer block h-[2px] bg-[#CED4D7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link className='text-[#CED4D7] group-hover:text-white transition font-bold text-md' to="/about">
                                About
                                <span className="block h-[2px] bg-[#CED4D7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link className='text-[#CED4D7] group-hover:text-white transition font-bold text-md' to="/projects">
                                Projects
                                <span className="block h-[2px] bg-[#CED4D7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link className='text-[#CED4D7] group-hover:text-white transition font-bold text-md' to="/contact">
                                Contact
                                <span className="block h-[2px] bg-[#CED4D7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar

