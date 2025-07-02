import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';

function SocialIcons() {
    return (
        <div className="flex justify-center items-center gap-8 text-[#CED4D7] text-2xl mb-10">
            <div className='bg-white rounded-full p-2'>
                <a href="https://instagram.com/hassanshakil4" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-black transition">
                    <FaInstagram />
                </a>
            </div>
            <div className='bg-white rounded-full p-2'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-black transition">
                    <FaFacebookF />
                </a>
            </div>
            <div className='bg-white rounded-full p-2'>
                <a href="https://github.com/hassanshakil576" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 text-black transition">
                    <FaGithub />
                </a>
            </div>
            <div className='bg-white rounded-full p-2'>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-black transition">
                    <FaLinkedinIn />
                </a>
            </div>

        </div>
    );
}
export default SocialIcons