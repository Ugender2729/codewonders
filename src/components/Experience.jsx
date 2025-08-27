import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Award, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: "CAMELQ SOFTWARE SOLUTIONS PVT LTD",
      position: "Frontend Developer",
      duration: "Dec 2024 - Present",
      location: "India",
      description: "Leading frontend development initiatives and mentoring junior developers in modern web technologies.",
      achievements: [
        "Developed cross-platform ride-hailing application using React Native",
        "Implemented real-time communication via Socket.IO",
        "Integrated Google Maps API for location tracking and navigation",
        "Used Clerk authentication with JWT tokens for secure access",
        "Deployed applications on Railway for scalable hosting"
      ],
      technologies: ["React Native", "Socket.IO", "Google Maps API", "Clerk Auth", "Railway"]
    },
    {
      company: "IT INTELLECT MICRO SOLUTIONS",
      position: "Associate Software Engineer",
      duration: "May 2021 - Dec 2024",
      location: "India",
      description: "Subject matter expert in software development with focus on React.js and enterprise solutions.",
      achievements: [
        "Led development of enterprise dashboards for Citi Bank and Quantela",
        "Built IoT framework for smart city monitoring (CISCO project)",
        "Developed e-commerce platform for TUMI luggage products",
        "Created insurance dashboard for Esurance with D3.js integration",
        "Mentored 6 junior developers and led cross-functional teams"
      ],
      technologies: ["React.js", "D3.js", "Redux", "HTML5/CSS3", "JavaScript", "Postman"]
    }
  ];

  const education = {
    degree: "B.Tech",
    institution: "NIT Surat",
    duration: "Graduated",
    description: "Strong foundation in computer science and engineering principles."
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
          alt="Experience background"
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
            Work Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
              <Building className="w-8 h-8 mr-4 text-blue-400" />
              Professional Experience
            </h3>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <h4 className="text-2xl font-bold text-white">{exp.position}</h4>
                        <div className="flex items-center text-sm text-gray-300 mt-3 sm:mt-0 bg-white/10 px-4 py-2 rounded-full">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-200 mb-4">
                        <Building className="w-5 h-5 mr-3" />
                        <span className="font-bold text-lg">{exp.company}</span>
                        <span className="mx-3 text-gray-400">•</span>
                        <MapPin className="w-5 h-5 mr-2" />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-200 mb-6 text-lg leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-bold text-white mb-4 text-lg">Key Achievements:</h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-200 flex items-start">
                              <span className="text-blue-400 mr-3 text-xl font-bold">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-white mb-4 text-lg">Technologies:</h5>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-4 py-2 bg-gradient-to-r from-blue-100/20 to-purple-100/20 text-white rounded-full text-sm font-semibold border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-400" />
                Education
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-xl">{education.degree}</h4>
                  <p className="text-gray-200 text-lg font-medium">{education.institution}</p>
                  <p className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-full inline-block mt-2">{education.duration}</p>
                </div>
                <p className="text-gray-200 leading-relaxed">{education.description}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">Career Highlights</h3>
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold">4+</div>
                  <div className="text-blue-100 font-medium">Years Experience</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold">5+</div>
                  <div className="text-blue-100 font-medium">Major Clients</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-blue-100 font-medium">Projects Delivered</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2"
                >
                  <div className="text-4xl font-bold">6</div>
                  <div className="text-blue-100 font-medium">Team Members Mentored</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
