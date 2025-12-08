import React from 'react';
import { BookOpen, Briefcase, Award, Code, GraduationCap, Globe } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCE, SKILL_CATEGORIES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in-up">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Profile & Education */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Profile Summary */}
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Profile Summary</h3>
            </div>
            <p className="text-slate-400 leading-relaxed text-justify">
              {PERSONAL_INFO.about}
            </p>
          </section>

          {/* Education */}
          <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Education</h3>
            </div>
            <div className="relative border-l-2 border-slate-800 pl-6 ml-2 space-y-2">
               <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-indigo-500 ring-4 ring-slate-900"></div>
               <h4 className="text-lg font-semibold text-white">{EDUCATION.institution}</h4>
               <p className="text-indigo-400 font-medium">{EDUCATION.degree}</p>
               <div className="flex justify-between text-sm text-slate-500 mt-1">
                 <span>{EDUCATION.period}</span>
                 <span className="font-mono bg-slate-800 px-2 py-0.5 rounded text-xs">CGPA: {EDUCATION.cgpa}</span>
               </div>
            </div>
          </section>

           {/* Certificates */}
           <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-teal-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Certificates</h3>
            </div>
            <ul className="space-y-3">
              {PERSONAL_INFO.certificates.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                   <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-500 flex-shrink-0"></span>
                   {cert}
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* Right Column: Skills, Experience, Languages */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Technical Skills */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Technical Skills</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((category, idx) => (
                <div key={idx} className="bg-slate-900 p-5 rounded-xl border border-slate-800">
                  <h4 className="text-teal-400 font-semibold mb-3 text-sm uppercase tracking-wider">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700 hover:border-teal-500/50 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Working Experience</h3>
            </div>
            
            <div className="space-y-6">
              {EXPERIENCE.map((job, idx) => (
                <div key={idx} className="bg-slate-900 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-4 md:items-center justify-between group hover:bg-slate-800/50 transition-colors">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-rose-400 transition-colors">{job.company}</h4>
                    {job.role && <p className="text-slate-400 text-sm mb-2">{job.role}</p>}
                    {job.description && <p className="text-slate-500 text-sm">{job.description}</p>}
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs text-slate-400 font-mono">
                      {job.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section>
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-3">
               {PERSONAL_INFO.languages.map((lang, idx) => (
                 <span key={idx} className="px-4 py-2 bg-slate-800/50 rounded-lg text-slate-300 border border-slate-700/50">
                   {lang}
                 </span>
               ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default About;