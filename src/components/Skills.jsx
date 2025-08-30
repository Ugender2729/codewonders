import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code,
  Smartphone,
  Globe,
  Server,
  Database,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 90, color: "from-blue-500 to-indigo-500" },
        { name: "JavaScript", level: 92, color: "from-yellow-400 to-orange-500" },
        { name: "React.js", level: 95, color: "from-cyan-500 to-blue-500" },
        { name: "React Hooks", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "React Redux", level: 85, color: "from-purple-600 to-indigo-600" },
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 88, color: "from-blue-600 to-cyan-600" },
        { name: "Expo", level: 85, color: "from-gray-700 to-gray-900" },
        { name: "Socket.IO", level: 80, color: "from-green-500 to-emerald-500" },
      ]
    },
    {
      title: "Data Visualization",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "D3.js", level: 85, color: "from-orange-600 to-red-600" },
        { name: "Charts & Graphs", level: 90, color: "from-green-600 to-teal-600" },
        { name: "Interactive Dashboards", level: 92, color: "from-blue-600 to-purple-600" },
      ]
    },
    {
      title: "AI Tools & Modern Platforms",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "Cursor AI", level: 90, color: "from-emerald-500 to-green-500" },
        { name: "Supabase", level: 85, color: "from-green-500 to-emerald-600" },
        { name: "Firebase", level: 88, color: "from-orange-500 to-yellow-500" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Server className="w-8 h-8" />,
      skills: [
        { name: "Git/GitHub", level: 90, color: "from-gray-800 to-black" },
        { name: "Postman", level: 85, color: "from-orange-500 to-red-500" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Jira", level: 80, color: "from-blue-600 to-indigo-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop"
          alt="Skills background"
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
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            My technical expertise spans across modern web technologies, mobile development, 
            and data visualization tools that enable me to create comprehensive solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-10">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white text-lg">{skill.name}</span>
                      <span className="text-sm text-gray-300 font-semibold bg-white/10 px-3 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, ease: "easeOut" }}
                        className={`h-4 rounded-full bg-gradient-to-r ${skill.color} shadow-sm`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">Additional Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Agile/Scrum", "REST APIs", "Google Maps API", "JWT Authentication",
                "Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "CI/CD Pipeline",
                "AI-Powered Development", "Real-time Databases", "Cloud Functions", "API Integration"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 font-medium hover:bg-white/20 transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
