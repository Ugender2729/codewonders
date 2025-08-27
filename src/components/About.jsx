import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Target, Zap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "4+ Years Experience",
      description: "Professional software development with React.js expertise"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Mentored 6 junior developers and led cross-functional teams"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Excellent troubleshooting skills and client-focused solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Adapts to new technologies and industry best practices"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Results Oriented",
      description: "Proven track record of delivering projects on time"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "B.Tech from NIT Surat with ongoing skill development"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&h=1080&fit=crop"
          alt="About background"
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
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Professional Summary
            </h3>
            <div className="space-y-6 text-gray-200 leading-relaxed text-lg">
              <p>
                I am a passionate Frontend Developer with over 4 years of experience specializing in React.js development. 
                My journey in software development has been marked by a strong focus on creating innovative, user-centric 
                solutions for enterprise applications.
              </p>
              <p>
                Known for excellent troubleshooting skills and the ability to address client needs effectively, 
                I have successfully delivered projects for major clients including Citi Bank, Quantela, TUMI, 
                and Esurance. My expertise spans from building dynamic dashboards to developing cross-platform 
                mobile applications.
              </p>
              <p>
                I thrive in collaborative environments, having mentored junior developers and worked effectively 
                in Scrum and Agile methodologies. My commitment to continuous learning keeps me updated with 
                cutting-edge technologies and industry best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl shadow-lg">
                    {highlight.icon}
                  </div>
                  <h4 className="font-bold text-white text-lg">{highlight.title}</h4>
                </div>
                <p className="text-gray-200 leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold mb-3">4+</div>
              <div className="text-blue-100 text-xl font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold mb-3">15+</div>
              <div className="text-blue-100 text-xl font-medium">Projects Completed</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold mb-3">6</div>
              <div className="text-blue-100 text-xl font-medium">Team Members Mentored</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
