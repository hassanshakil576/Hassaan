import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterText = () => {
  return (
    <h2 className="text-2xl sm:text-2xl font-mono">
      {' '}
      <span className="text-[#d3cace]">
        <Typewriter
          words={['Front-End Developer', 'Student at SMIT', 'Deep Learner and Observer']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1200}
        />
      </span>
    </h2>
  );
};

export default TypewriterText;
