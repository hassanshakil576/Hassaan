import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer sm:footer-horizontal footer-center z-50 shadow-md text-base-content p-6 backdrop-blur-md bg-[#1a1a1a]/60">
                <aside>
                    <h4 className='text-white'>Copyright © {new Date().getFullYear()} Hassaan shakil- All rights reserved.</h4>
                </aside>
            </footer>
        </>
    )
}

export default Footer