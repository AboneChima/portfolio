import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, X, MessageCircle } from 'lucide-react';

const BotChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hey there! I'm Oracle GPT, the AI assistant built by this developer. Ask me anything about the projects, tech stack, or just chat!",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: [
      "Hello! I'm Oracle GPT, ready to help you learn more about this developer's work!",
      "Hi there! Want to know about the amazing projects and tools built here?",
      "Hey! I'm the AI assistant that showcases this developer's skills. What would you like to know?"
    ],
    projects: [
      "This developer has built some incredible tools! From Telegram bots that automate payments to AI assistants that work like magic. The School Portal System manages entire academic ecosystems, while the Currency Tracker Bot provides real-time FX alerts. Each project solves real problems!",
      "The project portfolio is impressive! Oracle GPT (that's me!), WhatsApp Auto Reply Bot, Payment Link Generator, and more. Every tool is built to automate boring tasks and solve actual problems people face daily."
    ],
    skills: [
      "The tech stack is battle-tested: JavaScript, Python, PHP, React, Node.js, MongoDB, Firebase, and specialized APIs like Telegram Bot API, WhatsApp API, and OpenAI API. Currently mastering TypeScript and cloud deployment!",
      "This developer excels in full-stack development with a focus on automation and AI integration. From frontend React apps to backend Python bots, the skills span across languages, frameworks, databases, and intelligent APIs."
    ],
    automation: [
      "Automation is the core philosophy here! Why do manual work when you can build bots and systems that handle it? From payment processing to customer support, everything gets automated intelligently.",
      "The goal is simple: build tools so smart they feel like magic, but solve problems so real you can't live without them. Every project automates something that used to waste time."
    ],
    contact: [
      "Ready to build something amazing? You can reach out via email, Telegram, or WhatsApp. The developer loves collaborating on projects that automate boring stuff or solve local problems!",
      "Let's connect! Whether you need a bot, an AI system, or just want to chat about automation, the contact section has all the details. The bots speak for themselves! 🤖"
    ],
    default: [
      "That's an interesting question! This developer specializes in building functional tools, bots, and AI systems. What specific aspect would you like to know more about?",
      "I'm here to help you learn about the projects and skills showcased in this portfolio. Feel free to ask about automation, AI integration, or any specific technology!",
      "Great question! This portfolio showcases a developer who builds systems that actually work and solve real problems. What would you like to explore?"
    ]
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    }
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      return botResponses.projects[Math.floor(Math.random() * botResponses.projects.length)];
    }
    if (message.includes('skill') || message.includes('tech') || message.includes('stack') || message.includes('language')) {
      return botResponses.skills[Math.floor(Math.random() * botResponses.skills.length)];
    }
    if (message.includes('automat') || message.includes('bot') || message.includes('ai')) {
      return botResponses.automation[Math.floor(Math.random() * botResponses.automation.length)];
    }
    if (message.includes('contact') || message.includes('reach') || message.includes('hire') || message.includes('work together')) {
      return botResponses.contact[Math.floor(Math.random() * botResponses.contact.length)];
    }
    
    return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[500px] bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Oracle GPT</h3>
                  <p className="text-xs text-green-400">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-3 space-y-3 overflow-y-auto h-80">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-lg p-2.5 text-sm ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-800 text-gray-100'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="w-3 h-3 text-primary-400 mt-0.5 flex-shrink-0" />
                        )}
                        {message.sender === 'user' && (
                          <User className="w-3 h-3 text-white mt-0.5 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="text-xs leading-relaxed">{message.text}</p>
                          <p className="text-xs opacity-60 mt-1">{message.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 rounded-lg p-2.5 max-w-[85%]">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-3 h-3 text-primary-400" />
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white" />
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default BotChat;