import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Smartphone, Database, Shield, X, ArrowRight, Star } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const { scrollY } = useScroll();

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const titleY = useTransform(scrollY, [0, 500], [0, -100]);
  const titleScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const cardsY = useTransform(scrollY, [0, 800], [0, -150]);
  const cardsScale = useTransform(scrollY, [0, 800], [1, 0.95]);

  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { damping: 20, stiffness: 100 });
  const smoothTitleY = useSpring(titleY, { damping: 25, stiffness: 100 });
  const smoothTitleScale = useSpring(titleScale, { damping: 25, stiffness: 100 });
  const smoothCardsY = useSpring(cardsY, { damping: 20, stiffness: 100 });
  const smoothCardsScale = useSpring(cardsScale, { damping: 20, stiffness: 100 });

  // Scroll progress for progress bar
  const progressWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // Mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .cursor-target');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 0.8
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      rotateY: 2,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 400
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 0.8,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    hover: {
      scale: 2,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Citi Bank Command Center Dashboard",
      client: "Citi Bank, USA",
      description: "Next generation Omni-channel Dashboard solution for command center displaying real-time, interval, and historical data for executives, analysts, and operations teams.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React.js", "D3.js", "Real-time Data", "Dashboard", "Analytics"],
      features: [
        "Real-time data visualization",
        "Multi-device compatibility",
        "Executive dashboard views",
        "Historical trend analysis",
        "Interval data monitoring"
      ],
      category: "Enterprise Dashboard",
      liveUrl: "https://citibank-dashboard.demo.com",
      sourceUrl: "https://github.com/ugenderdharavath/citibank-dashboard"
    },
    {
      id: 2,
      title: "Smart City IoT Framework",
      client: "Quantela (CISCO)",
      description: "IoT project for CISCO to build a comprehensive framework for monitoring all smart city data through dynamic dashboards with configurable panels and widgets.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      technologies: ["React.js", "IoT Integration", "Dynamic Panels", "Real-time Monitoring", "Widget System"],
      features: [
        "Dynamic dashboard panels",
        "IoT device integration",
        "Real-time city monitoring",
        "Configurable widgets",
        "Multi-workspace views"
      ],
      category: "IoT Platform",
      liveUrl: "https://smartcity-iot.demo.com",
      sourceUrl: "https://github.com/ugenderdharavath/smartcity-iot"
    },
    {
      id: 3,
      title: "TUMI E-commerce Platform",
      client: "TUMI",
      description: "Online e-commerce platform for luxury luggage products with category-based browsing, product management, and seamless purchasing experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["React.js", "E-commerce", "Product Catalog", "Shopping Cart", "Payment Integration"],
      features: [
        "Category-based browsing",
        "Product catalog management",
        "Shopping cart functionality",
        "Secure payment processing",
        "Responsive design"
      ],
      category: "E-commerce",
      liveUrl: "https://tumi-ecommerce.demo.com",
      sourceUrl: "https://github.com/ugenderdharavath/tumi-ecommerce"
    },
    {
      id: 4,
      title: "Bike Taxi Application",
      client: "CamelQ",
      description: "Cross-platform ride-hailing application with real-time communication, location tracking, and secure authentication for seamless ride requests.",
      image: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=500&h=300&fit=crop",
      technologies: ["React Native", "Socket.IO", "Google Maps API", "Clerk Auth", "Railway"],
      features: [
        "Real-time ride requests",
        "Driver-user communication",
        "Location tracking",
        "Route optimization",
        "Secure authentication"
      ],
      category: "Mobile App",
      liveUrl: "https://biketaxi-app.demo.com",
      sourceUrl: "https://github.com/ugenderdharavath/biketaxi-app"
    },
    {
      id: 5,
      title: "Esurance Insurance Dashboard",
      client: "Esurance, USA",
      description: "Comprehensive insurance dashboard integrating React.js and D3.js for displaying insurance-related data with secure access and stakeholder-specific interfaces.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop",
      technologies: ["React.js", "D3.js", "Insurance Data", "Authentication", "Role-based Access"],
      features: [
        "Insurance data visualization",
        "Role-based access control",
        "Quote comparisons",
        "Policy management",
        "Stakeholder dashboards"
      ],
      category: "Insurance Platform",
      liveUrl: "https://esurance-dashboard.demo.com",
      sourceUrl: "https://github.com/ugenderdharavath/esurance-dashboard"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Enterprise Dashboard":
        return <Database className="w-5 h-5" />;
      case "IoT Platform":
        return <Globe className="w-5 h-5" />;
      case "E-commerce":
        return <Globe className="w-5 h-5" />;
      case "Mobile App":
        return <Smartphone className="w-5 h-5" />;
      case "Insurance Platform":
        return <Shield className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="pt-24 pb-24 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 z-[9998] origin-left"
        style={{ scaleX: progressWidth }}
      />

      {/* Enhanced Floating Cursor with gradient effect */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 1 : 0.8,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 500,
          mass: 0.5
        }}
      >
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-90 shadow-lg"></div>
        <div className="absolute inset-0 w-10 h-10 border-2 border-white rounded-full animate-ping opacity-30"></div>
      </motion.div>

      {/* Enhanced Background with gradient overlay */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: smoothBackgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-900/90 to-black/95"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:40px_40px]"></div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
      </div>
      </motion.div>

      {/* Enhanced Background decoration with floating animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-40 left-40 w-80 h-80 bg-pink-500/10 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{ 
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            rotate: [180, 360, 180]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 4
          }}
        ></motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          style={{ y: smoothTitleY, scale: smoothTitleScale }}
          className="text-center mb-20"
        >
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block mb-6 cursor-target"
          >
            <div className="relative">
              <Star className="w-12 h-12 text-yellow-400 mx-auto" />
              <motion.div 
                className="absolute inset-0 bg-yellow-400 rounded-full opacity-50 blur-md"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 128 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            A showcase of my major projects demonstrating expertise in React.js, mobile development, 
            and enterprise solutions for leading clients worldwide.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ y: smoothCardsY, scale: smoothCardsScale }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  variants={imageVariants}
                  whileHover="hover"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <motion.div 
                  className="absolute top-4 left-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </motion.div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute top-4 right-4 cursor-target"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.7, type: "spring", damping: 15 }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Project Title and Client */}
                <motion.div 
                  className="mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 cursor-target">
                    {project.title}
                  </h3>
                  <p className="text-blue-300 font-medium text-sm cursor-target">{project.client}</p>
                </motion.div>

                {/* Project Description */}
                <motion.p 
                  className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed cursor-target"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {project.description}
                </motion.p>

                {/* Technology Tags */}
                <motion.div 
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        variants={techTagVariants}
                        whileHover="hover"
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/20 cursor-pointer hover:bg-white/20 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span 
                        className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-xs font-medium cursor-target"
                        variants={techTagVariants}
                        whileHover="hover"
                      >
                        +{project.technologies.length - 4} more
                      </motion.span>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-target group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.button>

                <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="px-4 py-2 border border-white/20 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-all duration-300 cursor-target"
                  >
                    Live
                </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Project Modal with improved animations */}
        <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-[9999]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50, rotateX: -15 }}
                animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50, rotateX: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl cursor-target"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                  <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                    className="w-full h-80 object-cover rounded-t-3xl cursor-target"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                />
                  <motion.button
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", damping: 15 }}
                  onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg cursor-target"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.button>
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg cursor-target">
                    {getCategoryIcon(selectedProject.category)}
                    <span>{selectedProject.category}</span>
                  </div>
                  </motion.div>
              </div>

              <div className="p-10">
                  <motion.div 
                    className="mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-3 cursor-target">{selectedProject.title}</h2>
                    <p className="text-blue-300 font-semibold text-xl cursor-target">{selectedProject.client}</p>
                  </motion.div>

                  <motion.p 
                    className="text-gray-200 text-lg mb-8 leading-relaxed cursor-target"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedProject.description}
                  </motion.p>

                  <motion.div 
                    className="mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="font-bold text-white mb-4 text-xl cursor-target">Key Features:</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-gray-200 flex items-start cursor-target"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 + idx * 0.1 }}
                        >
                        <span className="text-blue-400 mr-3 text-xl font-bold">•</span>
                        <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                    ))}
                  </ul>
                  </motion.div>

                  <motion.div 
                    className="mb-8"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="font-bold text-white mb-4 text-xl cursor-target">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                        <motion.span
                        key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-full text-sm font-semibold border border-white/10 cursor-target backdrop-blur-sm"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.9 + idx * 0.1, type: "spring", damping: 15 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                        </motion.span>
                    ))}
                  </div>
                  </motion.div>

                  <motion.div 
                    className="flex space-x-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <motion.button 
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold cursor-target"
                  >
                    <ExternalLink size={20} />
                    <span>View Project</span>
                  </motion.button>
                  <motion.button 
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    onClick={() => window.open(selectedProject.sourceUrl, '_blank')}
                      className="flex items-center space-x-3 border-2 border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold cursor-target"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </motion.button>
                  </motion.div>
                </div>
              </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
        
        {/* Smooth Transition to Contact */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-transparent to-blue-900/50"></div>
      </div>
    </section>
  );
};

export default Projects;