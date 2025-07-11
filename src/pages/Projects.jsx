import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import passwordGeneratorPng from '../assets/Password-Gen.png';
import QuizAppPng from '../assets/Quiz-App.PNG';
import ShopAiPng from "../assets/Shop-Ai.PNG"
import Textutils from "../assets/Textutils.png"
import Portfolio from "../assets/Portfolio.PNG"
import BloggingApp from "../assets/Blogging-App.PNG"
import Footer from '../components/Footer';

function Projects() {
    const projectList = [
        {
            id: 1,
            Title: "Password Generator",
            img: passwordGeneratorPng,
            description: "This is a simple and user-friendly Password Generator application built with React. It allows users to create strong, random passwords by customizing the length and choosing whether to include numbers and special symbols. The password can be refreshed or copied to the clipboard with a single click",
            githubLink: "https://github.com/hassanshakil576/Password-Generator",
            demoLink: "https://easy-pass-gen.vercel.app",
        },
        {
            id: 2,
            Title: "Quiz App",
            img: QuizAppPng,
            description: "Quiz App is a dynamic and interactive quiz platform built with React. It allows users to answer multiple questions, view instant feedback, and track their score in real-time. The app features smooth navigation, responsive design, and a clean UI — making it a fun and engaging learning tool.",
            githubLink: "https://github.com/hassanshakil576/Quiz-App",
            demoLink: "https://quiz-app-eight-eosin.vercel.app",
        },
        {
            id: 3,
            Title: "Shop AI",
            img: ShopAiPng,
            description: "Shop AI is a clean and user-friendly React-based application featuring four core screens: Home, About, Contact, and Products. The Products page dynamically displays multiple product cards, with further details. Designed with a responsive layout and smooth navigation, the app delivers a seamless user experience while demonstrating efficient component structuring and React Router integration.",
            githubLink: "https://github.com/hassanshakil576/Dynamic-routing",
            demoLink: "https://reactDynamicRouting.vercel.app",
        },
        {
            id: 4,
            Title: "Textutils",
            img: Textutils,
            description: "TextUtils is a simple React-based text manipulation app that allows users to convert text to uppercase, lowercase, remove spaces, and clear text. It also provides basic text analysis, such as counting characters and words. Built with React and Bootstrap for a clean and responsive UI.",
            githubLink: "https://github.com/hassanshakil576/React-Textutils",
            demoLink: "https://react-textutils-self.vercel.app",
        },
        {
            id: 5,
            Title: "Portfolio",
            img: Portfolio,
            description: "A modern and responsive React portfolio showcasing my skills, projects, and passion for front-end development. The portfolio reflects clean UI, smooth animations and a mobile-friendly design.✨",
            githubLink: "https://github.com/hassanshakil576/Hassaan",
            demoLink: "https://hassaan-shakil.vercel.app",
        },
        {
            id: 6,
            Title: "Blogging-App",
            img: BloggingApp,
            description: "A simple and user-friendly Blogging platform where users can register, log in, and manage their blog posts. Built using HTML, CSS, JavaScript, Bootstrap, and Firebase (Authentication + Realtime Database), the app provides an intuitive interface for creating, editing, and deleting blog entries. Users can also upload images to visually enhance their posts. Firebase ensures secure login, real-time data updates, and cloud storage for seamless user experience across devices.",
            githubLink: "https://github.com/hassanshakil576/Blogging-App",
            demoLink: "https://hassanshakil576.github.io/Blogging-App/",
        },
        {
            id: 7,
            Title: "Textutils",
            img: Textutils,
            description: "TextUtils is a simple React-based text manipulation app that allows users to convert text to uppercase, lowercase, remove spaces, and clear text. It also provides basic text analysis, such as counting characters and words. Built with React and Bootstrap for a clean and responsive UI.",
            githubLink: "https://github.com/hassanshakil576/React-Textutils",
            demoLink: "https://react-textutils-self.vercel.app",
        },
        {
            id: 8,
            Title: "Textutils",
            img: Textutils,
            description: "TextUtils is a simple React-based text manipulation app that allows users to convert text to uppercase, lowercase, remove spaces, and clear text. It also provides basic text analysis, such as counting characters and words. Built with React and Bootstrap for a clean and responsive UI.",
            githubLink: "https://github.com/hassanshakil576/React-Textutils",
            demoLink: "https://react-textutils-self.vercel.app",
        },
        {
            id: 9,
            Title: "Textutils",
            img: Textutils,
            description: "TextUtils is a simple React-based text manipulation app that allows users to convert text to uppercase, lowercase, remove spaces, and clear text. It also provides basic text analysis, such as counting characters and words. Built with React and Bootstrap for a clean and responsive UI.",
            githubLink: "https://github.com/hassanshakil576/React-Textutils",
            demoLink: "https://react-textutils-self.vercel.app",
        },
    ];

    return (
        <>
            <motion.div
                className="text-center mt-20 px-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className="text-[#CED4D7] text-3xl md:text-5xl font-bold font-mono">
                    MY RECENT <span className="text-white font-extrabold">WORK!</span>
                </h1>
                <motion.p
                    className="text-[#CED4D7] text-sm md:text-md font-bold font-mono mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    Here are a few projects I have worked on recently!
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center p-8">
                {projectList.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Card
                            Title={project.Title}
                            img={project.img}
                            description={project.description}
                            githubLink={project.githubLink}
                            demoLink={project.demoLink}
                        />
                    </motion.div>
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Projects;
