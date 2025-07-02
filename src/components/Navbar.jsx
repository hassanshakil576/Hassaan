import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='flex justify-between items-start ml-20 mr-28'>
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
            </div>
        </>
    )
}

export default Navbar

