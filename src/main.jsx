// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import React from 'react'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import App from "./App.jsx"
import "./index.css"


const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <h1>No screen found</h1>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'contact',
                element: <Contact/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

