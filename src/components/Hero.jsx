import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, ArrowDown, Github, Linkedin, Calendar, Users, Award, TrendingUp, Code, Database, Cloud, Zap } from 'lucide-react';
import ugiImage from '../assets/ugi.jpeg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Better professional background images for carousel
  const backgroundImages = [
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  const handleEmailClick = () => {
    window.location.href = 'mailto:ugenderdharavath1@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+919398601984';
  };

  const professionalStats = [
    { icon: <Calendar className="w-5 h-5" />, value: "4+ Years", label: "Experience" },
    { icon: <Users className="w-5 h-5" />, value: "15+ Projects", label: "Completed" },
    { icon: <Award className="w-5 h-5" />, value: "6 Team Members", label: "Mentored" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "95%", label: "Client Satisfaction" }
  ];

  const additionalSkills = [
    { icon: <Code className="w-5 h-5" />, skill: "Full Stack Development" },
    { icon: <Database className="w-5 h-5" />, skill: "API Integration" },
    { icon: <Cloud className="w-5 h-5" />, skill: "Railway & Render Deployment" },
    { icon: <Zap className="w-5 h-5" />, skill: "JEE 2017 AIR 1472" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-spacing-lg">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={backgroundImages[currentImageIndex]}
              alt="Professional background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/75 to-black/70"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-purple-400 rounded-full animate-float animation-delay-2000 opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float animation-delay-4000 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
                  <span className="text-gradient-animated">
                Ugender Dharavath
              </span>
            </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 mb-6">
                  Full Stack Developer & React Specialist
            </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-8"
              >
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Around 4+ years of professional experience in full-stack development with expertise in React.js, 
              building dynamic user interfaces, and creating innovative solutions for enterprise applications.
                  Specialized in React Native, D3.js, API integration, and modern deployment technologies.
            </p>
          </motion.div>

              {/* Professional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {professionalStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-300">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-300">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mb-8"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Key Expertise:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {additionalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10"
                    >
                      <div className="text-blue-300">
                        {skill.icon}
                      </div>
                      <span className="text-sm text-gray-200 font-medium">{skill.skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Achievement Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/30">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-200 font-semibold text-sm">JEE 2017 AIR 1472 | NIT Surat Graduate</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-professional flex items-center justify-center space-x-3 px-8 py-3 text-lg"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Create a link element and trigger download
                const link = document.createElement('a');
                link.href = '/ugender-cv.pdf'; // Place your CV file in public folder
                link.download = 'Ugender_Dharavath_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center justify-center space-x-3 border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg hover-lift-professional group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
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

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-6 text-gray-300 mb-8"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 cursor-pointer"
              >
                <Phone size={18} className="text-blue-300" />
                <span className="font-medium">+91-9398601984</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={handleEmailClick}
                className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 cursor-pointer"
              >
                <Mail size={18} className="text-blue-300" />
                <span className="font-medium">ugenderdharavath1@gmail.com</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/Ugender2729"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Github size={20} className="text-white" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ugender-dharavath-856573323"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Linkedin size={20} className="text-blue-300" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end -mt-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              {/* Profile Photo */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img
                    src={ugiImage}
                    alt="Ugender Dharavath"
                    className="w-full h-full object-cover object-top"
                    style={{ objectPosition: 'center 20%' }}
                  />
            </div>
                
                {/* Floating elements around photo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
                />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-500 rounded-full opacity-80"
                />
            </div>

              {/* Professional badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <span className="text-white font-semibold text-sm">React Expert</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30"
              >
                <span className="text-green-200 font-semibold text-sm">Full Stack</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowDown size={24} className="text-white" />
        </motion.button>
      </motion.div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
