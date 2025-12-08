import React from 'react';
import { Github, Mail, Phone, ExternalLink } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-20 animate-fade-in-up">
      
      {/* 1. Projects Section */}
      <section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Assignments & Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of academic and personal projects demonstrating my technical capabilities in software development.
          </p>
          <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group flex flex-col bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-teal-900/20 hover:border-teal-500/30 transition-all duration-300 transform hover:-translate-y-1">
              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 py-1 bg-slate-950 text-slate-500 text-xs rounded border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium border border-slate-700"
                >
                  <Github size={18} />
                  <span>View Code</span>
                  <ExternalLink size={14} className="opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Contact Me Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 border border-slate-800 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-slate-400 max-w-lg">
              I am currently available for internship opportunities. Feel free to reach out via email or phone, or check out my work on GitHub.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="w-full max-w-md bg-slate-950/80 backdrop-blur p-6 rounded-2xl border border-slate-800 space-y-4">
             
             {/* Email */}
             <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-teal-500/30 transition-colors">
               <div className="p-3 bg-slate-800 rounded-full text-teal-400">
                 <Mail size={20} />
               </div>
               <div>
                 <p className="text-xs text-slate-500 uppercase font-semibold">Email</p>
                 <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-200 hover:text-white transition-colors break-all">
                   {PERSONAL_INFO.email}
                 </a>
               </div>
             </div>

             {/* Phone */}
             <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-teal-500/30 transition-colors">
               <div className="p-3 bg-slate-800 rounded-full text-green-400">
                 <Phone size={20} />
               </div>
               <div>
                 <p className="text-xs text-slate-500 uppercase font-semibold">Phone</p>
                 <a href={`tel:${PERSONAL_INFO.phone}`} className="text-slate-200 hover:text-white transition-colors">
                   {PERSONAL_INFO.phone}
                 </a>
               </div>
             </div>

             {/* Github */}
             <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-teal-500/30 transition-colors">
               <div className="p-3 bg-slate-800 rounded-full text-purple-400">
                 <Github size={20} />
               </div>
               <div>
                 <p className="text-xs text-slate-500 uppercase font-semibold">GitHub</p>
                 <a href="https://github.com/KhooShan" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white transition-colors">
                   github.com/KhooShan
                 </a>
               </div>
             </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;