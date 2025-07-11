import React from "react";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#1a1a1d] via-[#1f1f24] to-[#17171a] overflow-hidden">
            <div className="absolute w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse top-10 left-10 scale-110 transition-transform duration-1000 ease-in-out"></div>
            
            <div className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse bottom-10 right-10 scale-110 transition-transform duration-1000 ease-in-out"></div>
        </div>
    );
};

export default AnimatedBackground;
