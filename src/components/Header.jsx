import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-professional-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-3xl font-bold transition-colors duration-200 ${
              scrolled ? 'text-gray-800' : 'text-gradient-animated'
            }`}
          >
            UD
          </motion.div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('#home')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              Home
            </button>
            <button onClick={() => scrollToSection('#about')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              About
            </button>
            <button onClick={() => scrollToSection('#skills')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              Skills
            </button>
            <button onClick={() => scrollToSection('#experience')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              Experience
            </button>
            <button onClick={() => scrollToSection('#projects')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              Projects
            </button>
            <button onClick={() => scrollToSection('#contact')} className={`transition-colors duration-200 font-medium ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-400'
            }`}>
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Open Google Drive link in new tab for download
                window.open('https://docs.google.com/document/d/1QiDPciwpRC1OOaVwqe8S4FdcKijvHzIS/edit?usp=sharing&ouid=107995317623485311653&rtpof=true&sd=true', '_blank');
              }}
              className={`flex items-center space-x-3 border-2 px-6 py-3 rounded-full transition-all duration-300 font-semibold text-lg group relative overflow-hidden ${
                scrolled 
                  ? 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: "100%" }}
                whileHover={{ y: "0%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className={`flex items-center space-x-3 px-6 py-3 text-lg font-semibold transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500' 
                  : 'btn-professional'
              }`}
            >
              <span>Get In Touch</span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                : 'text-white hover:text-blue-400 hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-professional-lg"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-300 font-medium text-lg"
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 mt-4 text-lg font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                <span>Get In Touch</span>
              </motion.button>
              
              <motion.button 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  // Open Google Drive link in new tab for download
                  window.open('https://docs.google.com/document/d/1QiDPciwpRC1OOaVwqe8S4FdcKijvHzIS/edit?usp=sharing&ouid=107995317623485311653&rtpof=true&sd=true', '_blank');
                }}
                className="w-full flex items-center justify-center space-x-3 border-2 border-gray-800 text-gray-800 px-6 py-3 mt-2 text-lg font-semibold rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
