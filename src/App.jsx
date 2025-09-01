import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import MatrixBackground from './components/MatrixBackground'
import TerminalPlayground from './components/TerminalPlayground'
import BotChat from './components/BotChat'


function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showTerminal, setShowTerminal] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl font-mono mb-4 text-primary-500">
            <span className="glitch" data-text="INITIALIZING...">
              INITIALIZING...
            </span>
          </div>
          <div className="flex space-x-1 justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-primary-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white relative">
      <MatrixBackground />
      
      <Header onTerminalToggle={() => setShowTerminal(!showTerminal)} />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      {showTerminal && (
        <TerminalPlayground onClose={() => setShowTerminal(false)} />
      )}


      
      <BotChat />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 left-8 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  )
}

export default App