import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, Bot, Brain, GraduationCap, CreditCard, MessageSquare, Banknote, CloudRain, X, Sparkles, Zap, Database, Globe } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoSrc: '', title: '' })

  const projects = [
    {
      id: 1,
      name: "Oracle GPT",
      description: "Your personal AI assistant like ChatGPT built with OpenAI API",
      icon: Sparkles,
      stack: ["Python", "OpenAI API", "Flask", "React"],
      image: "/api/placeholder/600/400",
      video: "/videos/oracle gpt video.mp4",
      demoUrl: "https://courageous-mochi-71a6b7.netlify.app/",
      githubUrl: "#",
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "School Portal System",
      description: "Full academic management system with login, grade reports, staff/admin panel",
      icon: GraduationCap,
      stack: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/600/400",
      video: null,
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Telegram AI Assistant",
      description: "A Telegram bot that acts like a pocket AI for chats",
      icon: Zap,
      stack: ["Python", "Telegram Bot API", "OpenAI", "Redis"],
      image: "/api/placeholder/600/400",
      video: null,
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      name: "Payment Link Generator",
      description: "Automates Telegram bot payments via secure links",
      icon: Banknote,
      stack: ["Node.js", "Stripe API", "Telegram API", "PostgreSQL"],
      image: "/api/placeholder/600/400",
      video: "/videos/telegram payment link.mp4",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "WhatsApp Auto Reply Bot",
      description: "A smart responder built on WhatsApp Business API",
      icon: Bot,
      stack: ["Node.js", "WhatsApp API", "NLP", "MongoDB"],
      image: "/api/placeholder/600/400",
      video: null,
      demoUrl: "#",
      githubUrl: "#",
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 6,
      name: "Currency Tracker Bot",
      description: "Alerts users of black market FX rates in real time",
      icon: Database,
      stack: ["Python", "Telegram API", "Web Scraping", "SQLite"],
      image: "/api/placeholder/600/400",
      video: "/videos/telegram currency tracker.mp4",
      demoUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      name: "Oracle Weather",
      description: "Professional weather forecast app with interactive maps and detailed analytics",
      icon: CloudRain,
      stack: ["JavaScript", "Weather API", "HTML/CSS", "Responsive Design"],
      image: "/api/placeholder/600/400",
      video: null,
      demoUrl: "https://abonechima.github.io/weather-app/",
      githubUrl: "#",
      featured: true,
      color: "from-sky-500 to-blue-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wider mb-4">
              🧠 Battle-Tested Tools
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Systems I've Built
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Systems I've built that solve real-world problems through automation, AI, and smart integrations.
            </p>
          </motion.div>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12"
        >
          {projects.filter(p => p.featured).map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Project Image/Preview */}
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                  <IconComponent className="w-16 h-16 text-white z-10" />
                  
                  {/* Video Play Button Overlay for projects with videos */}
                  {project.video && (
                    <div className="absolute top-4 right-4 z-20">
                      <motion.button
                        onClick={() => setVideoModal({ isOpen: true, videoSrc: project.video, title: project.name })}
                        className="p-2 bg-primary-600/80 backdrop-blur-sm rounded-full text-white hover:bg-primary-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-4 h-4" />
                      </motion.button>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {projects.filter(p => !p.featured).map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group bg-dark-card border border-dark-border rounded-lg p-6 hover:border-primary-500/50 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h4>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-bg border border-dark-border rounded text-xs font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500">
                      +{project.stack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    className="text-primary-500 hover:text-primary-400 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            ...and many more tools I've built to scratch my own itch.
          </p>
          <motion.a
            href="https://github.com"
            className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
            whileHover={{ x: 5 }}
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
        
        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg font-mono">
            ...and many more tools I've built to scratch my own itch.
          </p>
        </motion.div>
      </div>
      
      {/* Video Modal */}
      {videoModal.isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModal({ isOpen: false, videoSrc: '', title: '' })}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-dark-card border border-dark-border rounded-xl overflow-hidden max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-border">
              <h3 className="text-xl font-bold text-white">{videoModal.title}</h3>
              <button
                onClick={() => setVideoModal({ isOpen: false, videoSrc: '', title: '' })}
                className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <video
                className="w-full h-full"
                controls
                autoPlay
                src={videoModal.videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Projects