import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                className='fixed top-0 left-0 w-full z-50 backdrop-blur-xs bg-[#1f1f24]/60 flex justify-between items-center shadow-2xs px-4 md:px-8 py-4'
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div className="flex-shrink-0">
                    <a className="text-2xl md:text-3xl font-bold text-[#CED4D7] bg-clip-text cursor-pointer font-mono">
                        Hassaan.
                    </a>
                </div>

                {/* Hamburger - Mobile Only */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                    </button>
                </div>

                {/* Menu - Desktop Only */}
                <div className='hidden md:block'>
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

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className='md:hidden absolute top-16 left-0 w-full bg-[#1f1f24] z-40'>
                    <ul className='flex flex-col items-center gap-4 py-4'>
                        <li>
                            <Link onClick={() => setIsOpen(false)} className='text-[#CED4D7] hover:text-white font-bold text-lg' to='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsOpen(false)} className='text-[#CED4D7] hover:text-white font-bold text-lg' to='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsOpen(false)} className='text-[#CED4D7] hover:text-white font-bold text-lg' to='/projects'>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setIsOpen(false)} className='text-[#CED4D7] hover:text-white font-bold text-lg' to='/contact'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar;



