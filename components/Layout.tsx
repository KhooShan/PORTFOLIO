import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Styling helper for nav links
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors duration-200 uppercase tracking-wider ${
      isActive ? 'text-teal-400' : 'text-slate-400 hover:text-white'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-3 text-lg font-medium border-l-4 pl-4 transition-all ${
      isActive
        ? 'border-teal-400 text-teal-400 bg-slate-900/50'
        : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800'
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo Area */}
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* 
                USER INSTRUCTION: 
                Replace the src below with your logo png path. 
                Example: src="/logo.png" 
              */}
              <div className="h-10 w-10 relative overflow-hidden rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                 {/* Placeholder for Logo */}
                 <Code2 className="text-teal-400 w-6 h-6" /> 
                 {/* <img src="/path/to/your/logo.png" alt="Logo" className="object-cover w-full h-full" /> */}
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/projects" className={navLinkClass}>Projects & Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-slate-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 absolute w-full left-0 top-16 shadow-2xl">
            <div className="px-2 pt-2 pb-6 space-y-1">
              <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>Home</NavLink>
              <NavLink to="/about" onClick={closeMenu} className={mobileNavLinkClass}>About</NavLink>
              <NavLink to="/projects" onClick={closeMenu} className={mobileNavLinkClass}>Projects & Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-slate-500 text-sm border-t border-slate-900 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;