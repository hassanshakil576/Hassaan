import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Socialicons from "../components/Socialicons"

function Home() {
    return (
        <>
            <Hero />
            <div id="introduction">
                <Introduction />
            </div>
            <Socialicons />

        </>
    )
}

export default Home