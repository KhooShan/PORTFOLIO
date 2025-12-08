import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Home: React.FC = () => {
  // Using absolute path '/Profile.jpg' assumes the file is in the public root.
  const [imgSrc, setImgSrc] = useState('/Profile.jpg');

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-12">
      {/* Text Content */}
      <div className="order-2 md:order-1 flex-1 text-center md:text-left space-y-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-400 uppercase bg-teal-400/10 rounded-full">
          Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-teal-400">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto md:mx-0">
          A {PERSONAL_INFO.title} at <span className="text-slate-200 font-semibold">{PERSONAL_INFO.school}</span>.
        </p>
        <p className="text-slate-500 max-w-lg mx-auto md:mx-0">
          Welcome to my personal portfolio. Explore my journey, skills, and the projects I've built during my academic career.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <NavLink 
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-900 bg-teal-400 rounded-lg hover:bg-teal-300 transition-colors duration-200"
          >
            About Me
          </NavLink>
          <NavLink 
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-400 bg-transparent border border-teal-400 rounded-lg hover:bg-teal-400/10 transition-colors duration-200 group"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>

      {/* Image Content */}
      <div className="order-1 md:order-2 flex-1 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          {/* Decorative Ring */}
          <div className="absolute inset-0 border-2 border-teal-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border-2 border-slate-700/50 rounded-full" />
          
          {/* 
            Profile Picture Container
            Using absolute path '/Profile.jpg' to ensure it loads from the root.
            Includes fallback to lowercase '/profile.jpg' and then to avatar.
          */}
          <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl bg-slate-800">
             <img 
               src={imgSrc} 
               alt={PERSONAL_INFO.name}
               onError={() => {
                 if (imgSrc === '/Profile.jpg') {
                   setImgSrc('/profile.jpg');
                 } else if (imgSrc === '/profile.jpg') {
                   setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(PERSONAL_INFO.name)}&background=0f172a&color=2dd4bf&size=400`);
                 }
               }}
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;