import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageCircle, Send, Github, Linkedin, Twitter, Phone, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/xovnlblo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: 'general'
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abonejoseph@gmail.com',
      description: 'Best for detailed project discussions',
      action: 'mailto:abonejoseph@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@De_Auracle',
      description: 'Quick questions and bot demos',
      action: 'https://t.me/De_Auracle',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '+234 706 887 2813',
      description: 'Voice calls and urgent matters',
      action: 'https://wa.me/2347068872813',
      color: 'from-green-500 to-green-600'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/AboneChima',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://formspree.io/f/xovnlblo',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/mainoracle10',
      color: 'hover:text-blue-400'
    }
  ]

  const projectTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'bot', label: 'Bot Development' },
    { value: 'webapp', label: 'Web Application' },
    { value: 'api', label: 'API Integration' },
    { value: 'automation', label: 'Automation Solution' },
    { value: 'consultation', label: 'Technical Consultation' }
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
    <section id="contact" className="py-20 bg-dark-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-sm font-mono text-primary-500 uppercase tracking-wider mb-4">
              Let's Build Something Amazing
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something <span className="text-primary-400">Smart</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Let's build something that automates the boring stuff or solves a local problem. 
              Ready to turn repetitive tasks into intelligent systems?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h4>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon
                    return (
                      <motion.a
                        key={method.title}
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-dark-bg border border-dark-border rounded-lg hover:border-primary-500/50 transition-all duration-300 group"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-white group-hover:text-primary-500 transition-colors">
                              {method.title}
                            </h5>
                            <p className="text-primary-500 font-mono text-sm mb-1">{method.value}</p>
                            <p className="text-gray-400 text-sm">{method.description}</p>
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>Remote & Available Worldwide</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="font-semibold text-white mb-4">Follow My Work</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-dark-bg border border-dark-border rounded-lg text-gray-400 ${social.color} transition-all duration-300`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-dark-bg border border-dark-border rounded-xl p-4 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Start a Project</h4>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
                  >
                    🎉 Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
                  >
                    ❌ Failed to send message. Please try again or contact me directly.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                      >
                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project, the problems you're trying to solve, or just say hello! The more details, the better I can help."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-600/50 text-white font-semibold rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-primary-600/20 to-purple-600/20 border border-primary-500/30 rounded-xl p-8"
          >
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something That Actually Works?
            </h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's turn your ideas into tools that solve real problems. 
              Whether it's automating workflows, building intelligent bots, 
              or creating systems that scale - I'm here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
              <motion.a
                href="mailto:abonejoseph@gmail.com"
                className="px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact