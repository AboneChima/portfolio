import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Bot, Wrench, Server, Smartphone } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = {
    languages: {
      title: 'Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95, experience: '4+ years' },
        { name: 'JavaScript', level: 90, experience: '3+ years' },
        { name: 'PHP', level: 88, experience: '3+ years' },
        { name: 'TypeScript', level: 85, experience: '2+ years' },
        { name: 'Java', level: 80, experience: '2+ years' },
        { name: 'HTML/CSS', level: 92, experience: '4+ years' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React', level: 90, experience: '3+ years' },
        { name: 'Node.js', level: 85, experience: '3+ years' },
        { name: 'Express.js', level: 80, experience: '2+ years' },
        { name: 'Laravel', level: 75, experience: '2+ years' }
      ]
    },
    databases: {
      title: 'Databases',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'SQL (MySQL/PostgreSQL)', level: 90, experience: '3+ years' },
        { name: 'MongoDB', level: 85, experience: '2+ years' },
        { name: 'Firebase', level: 80, experience: '2+ years' },
        { name: 'SQLite', level: 85, experience: '3+ years' }
      ]
    },
    apis: {
      title: 'Bots/APIs',
      icon: Bot,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Telegram Bot API', level: 95, experience: '3+ years' },
        { name: 'WhatsApp API', level: 90, experience: '2+ years' },
        { name: 'OpenAI API', level: 85, experience: '2+ years' },
        { name: 'REST APIs', level: 90, experience: '4+ years' }
      ]
    },
    tools: {
      title: 'Dev Tools',
      icon: Wrench,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'Git & GitHub', level: 95, experience: '4+ years' },
        { name: 'VS Code', level: 95, experience: '4+ years' },
        { name: 'Postman', level: 85, experience: '3+ years' },
        { name: 'XAMPP', level: 80, experience: '3+ years' }
      ]
    },
    creative: {
      title: 'Creative & Media',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Video Editing', level: 85, experience: '3+ years' },
        { name: 'Content Creation', level: 80, experience: '2+ years' },
        { name: 'UI/UX Design', level: 75, experience: '2+ years' },
        { name: 'Adobe Premiere', level: 80, experience: '3+ years' }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wider mb-4">
              Technical Arsenal
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Skills & Stack
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              A carefully curated toolkit for building robust, scalable solutions 
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-dark-card border border-dark-border text-gray-300 hover:border-primary-500/50 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                  <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Skills Display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-card border border-dark-border rounded-xl p-4 sm:p-8 mx-4 sm:mx-0"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color}`}>
                {React.createElement(skillCategories[activeCategory].icon, {
                  className: "w-6 h-6 text-white"
                })}
              </div>
              <h4 className="text-2xl font-bold text-white">
                {skillCategories[activeCategory].title}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white">{skill.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-400">{skill.experience}</span>
                      <span className="text-sm font-mono text-primary-500">{skill.level}%</span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-dark-bg rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center bg-dark-card border border-dark-border rounded-xl p-8"
          >
            <h4 className="text-xl font-bold text-white mb-4">
              Currently Learning & Exploring
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Advanced TypeScript Patterns',
                'Cloud Deployment (AWS/Vercel)',
                'Motion Graphics & Animation',
                'Advanced Video Production',
                'Spring Boot (Java)',
                'Docker & DevOps'
              ].map((item, index) => (
                <motion.span
                  key={item}
                  className="px-4 py-2 bg-dark-bg border border-dark-border rounded-full text-sm text-gray-300 hover:border-primary-500/50 hover:text-primary-500 transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
            
            <p className="text-gray-400 mt-6 font-mono text-sm">
              💡 Always learning, always building, always solving problems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills