import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Zap, Target, Lightbulb, Coffee, Rocket } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { number: "50+", label: "Projects Built", icon: Code },
    { number: "10+", label: "Bots Deployed", icon: Zap },
    { number: "5+", label: "APIs Integrated", icon: Target },
    { number: "∞", label: "Problems Solved", icon: Lightbulb }
  ]

  const journey = [
    {
      phase: "The Problem Solver",
      description: "Started coding to automate boring tasks and solve real-world problems that others just accepted as 'the way things are'.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500"
    },
    {
      phase: "The Bot Builder",
      description: "Discovered the power of bots and APIs. Built my first Telegram bot and never looked back - automation became my superpower.",
      icon: Zap,
      color: "from-blue-500 to-purple-500"
    },
    {
      phase: "The System Architect",
      description: "Evolved from simple scripts to full-stack systems. Now I build platforms that scale and tools that teams actually want to use.",
      icon: Rocket,
      color: "from-green-500 to-teal-500"
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
    <section id="about" className="py-20 bg-dark-card relative">
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
              About the Developer
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Building Tools That Actually Work
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm Abone Joseph, passionate about solving problems using automation, code, and AI. Every project I build serves a real purpose - 
              whether it's streamlining business processes, creating intelligent assistants, or building platforms that actually work.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center p-4 sm:p-6 bg-dark-bg border border-dark-border rounded-lg hover:border-primary-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-primary-600/20 rounded-full">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-4">
                From Fintech Automation to Educational Platforms
              </h4>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My experience spans frontend (React, TypeScript, JavaScript), backend (Python, PHP, Java), databases (SQL), 
                  version control (Git), video editing, and AI integration. I don't just write code - I craft solutions that automate the boring stuff.
                </p>
                
                <p>
                  My journey started with a simple question: <em>"Why do we accept manual, 
                  repetitive tasks when we can automate them?"</em> This led me down the rabbit 
                  hole of building bots, APIs, and systems that actually make life easier.
                </p>
                
                <p>
                  Whether it's a school portal that teachers actually enjoy using, a 
                  Telegram bot that handles payments seamlessly, or video content that engages audiences, 
                  I focus on building tools and creating content that solve real problems for real people.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <Coffee className="w-5 h-5 text-primary-500" />
                <span className="text-gray-400 font-mono text-sm">
                  Currently mastering TypeScript and cloud deployment while exploring new ways to integrate AI into everyday workflows. 
                  The goal? Build tools so smart they feel like magic, but solve problems so real you can't live without them.
                </span>
              </div>
            </motion.div>

            {/* Right Column - Journey Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-6">My Evolution</h4>
              
              {journey.map((phase, index) => {
                const IconComponent = phase.icon
                return (
                  <motion.div
                    key={phase.phase}
                    className="relative pl-8 pb-6 last:pb-0"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {/* Timeline line */}
                    {index < journey.length - 1 && (
                      <div className="absolute left-4 top-12 w-0.5 h-16 bg-dark-border" />
                    )}
                    
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-dark-bg border border-dark-border rounded-lg p-4 hover:border-primary-500/30 transition-colors">
                      <h5 className="font-semibold text-white mb-2">{phase.phase}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">{phase.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="text-center bg-dark-bg border border-dark-border rounded-xl p-8"
          >
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">
                My Development Philosophy
              </h4>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-6">
                "Code should be like a good magic trick - it should work flawlessly, 
                solve real problems, and make people wonder how they ever lived without it. 
                But unlike magic, good code should be maintainable, scalable, and well-documented."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-primary-500 font-bold text-lg mb-2">Problem-First</div>
                  <div className="text-gray-400 text-sm">I start with the problem, not the technology</div>
                </div>
                <div className="text-center">
                  <div className="text-primary-500 font-bold text-lg mb-2">User-Focused</div>
                  <div className="text-gray-400 text-sm">If users don't love it, it's not done</div>
                </div>
                <div className="text-center">
                  <div className="text-primary-500 font-bold text-lg mb-2">Battle-Tested</div>
                  <div className="text-gray-400 text-sm">Every tool I build gets used in production</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About