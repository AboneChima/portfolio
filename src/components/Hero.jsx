import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Eye, Github, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const fullText = "Full Stack Developer & Problem Solver"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500 rounded-full"
            style={
              {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }
            }
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="text-sm font-mono text-primary-500 uppercase tracking-wider">
              Full Stack Developer • Bot Builder • AI Systems Expert
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 font-mono">Abone Joseph</span>
                <br />
                <span className="block text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4">
                  {typedText}
                  <span className="terminal-cursor text-primary-500">|</span>
                </span>
              </h1>
            </div>
          </motion.div>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4"
          >
            I build bots, systems & AI solutions that solve real problems. From automation to full-stack applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
          >
            <motion.a
              href="#projects"
              className="group bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>See Projects</span>
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/videos/Abone_Joseph_CV.pdf"
              download="Abone_Joseph_CV.pdf"
              className="group border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Skills preview */}
          <motion.div 
            variants={itemVariants}
            className="pt-12"
          >
            <p className="text-sm text-gray-400 mb-4 font-mono">SKILLS</p>
            <div className="flex flex-wrap justify-center gap-3 text-gray-300 max-w-4xl mx-auto">
              {['Python', 'React', 'PHP', 'JavaScript', 'TypeScript', 'Video Editing', 'AI Integration', 'Bot Development'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-primary-600/20 border border-primary-500/30 rounded-md text-primary-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero