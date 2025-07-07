import React from 'react';

const techStackData = [
  { TechStackIcon: "https://eki.my.id/html.svg", Language: "HTML" },
  { TechStackIcon: "https://eki.my.id/css.svg", Language: "CSS" },
  { TechStackIcon: "https://eki.my.id/javascript.svg", Language: "JavaScript" },
  { TechStackIcon: "https://eki.my.id/reactjs.svg", Language: "React" },
  { TechStackIcon: "https://eki.my.id/tailwind.svg", Language: "TailwindCSS" },
  { TechStackIcon: "https://eki.my.id/vite.svg", Language: "Vite" },
  { TechStackIcon: "https://eki.my.id/nodejs.svg", Language: "Node.js" },
  { TechStackIcon: "https://eki.my.id/bootstrap.svg", Language: "Bootstrap" },
  { TechStackIcon: "https://eki.my.id/MUI.svg", Language: "Material UI" },
  { TechStackIcon: "https://eki.my.id/firebase.svg", Language: "Firebase" },
  { TechStackIcon: "https://eki.my.id/SweetAlert.svg", Language: "SweetAlert2" },
  { TechStackIcon: "https://eki.my.id/vercel.svg", Language: "Vercel" },
];


const TechStack = ({ TechStackIcon, Language }) => {
  return (
    <>
      <div className="group p-6 rounded-2xl bg-slate-800/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl mt-10 mb-10">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
          <img
            src={TechStackIcon}
            alt={`${Language} icon`}
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
          />
        </div>
        <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
          {Language}
        </span>
      </div>
    </>
  );
};

const TechStackList = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
      {techStackData.map((tech, index) => (
        <TechStack
          key={index}
          TechStackIcon={tech.TechStackIcon}
          Language={tech.Language}
        />
      ))}
    </div>
  );
};

export default TechStackList;
