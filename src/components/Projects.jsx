import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Globe, Smartphone, Database, Shield, X } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1920&h=1080&fit=crop"
          alt="Projects background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/75 to-black/70"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            A showcase of my major projects demonstrating expertise in React.js, mobile development, 
            and enterprise solutions for leading clients worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-300 font-semibold text-lg">{project.client}</p>
                </div>

                <p className="text-gray-200 text-base mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100/20 to-purple-100/20 text-white rounded-full text-sm font-semibold border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-semibold">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                  className="w-full btn-professional py-3 text-lg font-semibold"
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                    {getCategoryIcon(selectedProject.category)}
                    <span>{selectedProject.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-3">{selectedProject.title}</h2>
                  <p className="text-blue-300 font-semibold text-xl">{selectedProject.client}</p>
                </div>

                <p className="text-gray-200 text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="mb-8">
                  <h3 className="font-bold text-white mb-4 text-xl">Key Features:</h3>
                  <ul className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-200 flex items-start">
                        <span className="text-blue-400 mr-3 text-xl font-bold">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold text-white mb-4 text-xl">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100/20 to-purple-100/20 text-white rounded-full text-sm font-semibold border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                    className="flex items-center space-x-3 btn-professional px-6 py-3"
                  >
                    <ExternalLink size={20} />
                    <span>View Project</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(selectedProject.sourceUrl, '_blank')}
                    className="flex items-center space-x-3 border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                  >
                    <Github size={20} />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
