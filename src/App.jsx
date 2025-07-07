import React, { useEffect, useState } from 'react';
import "./index.css";
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Preloader from './components/PreLoader.jsx';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const logo = document.getElementById("preloader-logo");
      if (logo) {
        logo.classList.add("fade-out");
        setTimeout(() => setLoading(false), 500);
      } else {
        setLoading(false);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar /><br /><br />
      <Outlet />
    </>
  );
}

export default App;


