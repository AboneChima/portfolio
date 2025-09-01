import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalPlayground = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Final Boss Terminal v1.0' },
    { type: 'output', content: 'Type "help" for available commands' },
  ]);
  const [currentPath, setCurrentPath] = useState('~/portfolio');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  about     - Learn about the developer',
      '  projects  - List all projects',
      '  skills    - Show technical skills',
      '  contact   - Get contact information',
      '  whoami    - Display current user info',
      
      '  clear     - Clear terminal',
      '  exit      - Close terminal',
    ],
    about: () => [
      'Full Stack Developer & AI Enthusiast',
      'Specializing in bots, automation, and real-world solutions',
      'Building tools that work like magic but solve actual problems',
    ],
    projects: () => [
      'Battle-Tested Projects:',
      '  1. Oracle GPT - Personal AI assistant with OpenAI API',
      '  2. School Portal System - Academic management platform',
      '  3. Telegram AI Assistant - Pocket AI for chat automation',
      '  4. Payment Link Generator - Secure Telegram bot payments',
      '  5. WhatsApp Auto Reply Bot - Smart business responder',
      '  6. Currency Tracker Bot - Real-time FX rate alerts',
      '',
      'Use "project <name>" for details on specific projects',
    ],
    skills: () => [
      'Technical Arsenal:',
      '  Languages: JavaScript, Python, PHP, Java',
      '  Frontend: React, HTML5, CSS3, Tailwind',
      '  Backend: Node.js, Express, Django',
      '  Databases: MongoDB, MySQL, Firebase',
      '  APIs: Telegram Bot API, WhatsApp API, OpenAI API',
      '  Tools: Git, VSCode, Postman, Docker',
    ],
    contact: () => [
      'Ready to build something amazing?',
      '  Email: developer@finalboss.dev',
      '  Telegram: @finalboss_dev',
      '  GitHub: github.com/finalboss',
      '  LinkedIn: linkedin.com/in/finalboss',
    ],
    whoami: () => [
      'finalboss@portfolio:~/projects$ whoami',
      'Final Boss Developer',
      'Builder of bots, systems & AI solutions',
      'Problem solver through code and automation',
    ],
    clear: () => {
      setHistory([]);
      return [];
    },
    exit: () => {
      onClose();
      return ['Terminal session ended.'];
    },
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      return output;
    } else if (trimmedCmd.startsWith('project ')) {
      const projectName = trimmedCmd.substring(8);
      return [
        `Project: ${projectName}`,
        'For detailed project information, please visit the Projects section above.',
        'Each project includes live demos, source code, and technical details.',
      ];
    } else if (trimmedCmd === '') {
      return [];
    } else {
      return [`Command not found: ${cmd}`, 'Type "help" for available commands'];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newHistory = [
      ...history,
      { type: 'input', content: `${currentPath}$ ${input}` },
    ];

    const output = executeCommand(input);
    if (output.length > 0) {
      output.forEach(line => {
        newHistory.push({ type: 'output', content: line });
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-green-500/30 rounded-lg w-full max-w-4xl h-[600px] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-green-500/30">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-green-400 font-mono text-sm">
              Final Boss Terminal
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Terminal Content */}
          <div
            ref={terminalRef}
            className="flex-1 p-4 overflow-y-auto font-mono text-sm bg-gray-900"
          >
            {history.map((entry, index) => (
              <div key={index} className="mb-1">
                {entry.type === 'input' ? (
                  <div className="text-green-400">{entry.content}</div>
                ) : (
                  <div className="text-gray-300">{entry.content}</div>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-2">
              <span className="text-green-400 mr-2">{currentPath}$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-green-400 outline-none font-mono"
                placeholder="Type a command..."
                autoComplete="off"
              />
              <span className="text-green-400 animate-pulse ml-1">█</span>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalPlayground;