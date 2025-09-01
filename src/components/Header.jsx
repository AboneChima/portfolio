import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Menu, X, Code2, Zap, Download } from 'lucide-react'

const Header = ({ onTerminalToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-white tracking-tight">
                Abone <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Joseph</span>
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wider">
                FULL STACK DEVELOPER
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CV Download & Terminal Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="/videos/Abone_Joseph_CV.pdf"
              download="Abone_Joseph_CV.pdf"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Download CV"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </motion.a>
            
            <motion.button
              onClick={onTerminalToggle}
              className="p-2 text-gray-300 hover:text-primary-500 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Open Terminal"
            >
              <Terminal className="w-5 h-5" />
            </motion.button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-dark-border bg-dark-bg/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white hover:bg-primary-500/10 transition-all duration-200 font-medium px-4 py-3 rounded-lg mx-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile CV Download */}
              <motion.a
                href="/videos/Abone_Joseph_CV.pdf"
                download="Abone_Joseph_CV.pdf"
                className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-200 font-medium px-4 py-3 rounded-lg mx-2 mt-2 border-t border-dark-border pt-4"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

export default Header