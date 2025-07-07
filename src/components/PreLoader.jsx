import React from "react";
import Loader from "../assets/Preloader.svg";

function Preloader() {
    return (
        <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
            <img
                src={Loader}
                alt="Logo"
                className="w-25 h-25 animate-pulse opacity-100 transition-all duration-500 ease-in-out invert text-white"
                id="preloader-logo"

            />
        </div>
    );
}

export default Preloader;


