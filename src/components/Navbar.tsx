import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'GitHub', href: 'https://github.com/Tejanmayi'},
  ];

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home"> 
              <img src={logo} alt="Logo" className="h-8 w-8" />
            </a>
            <a href="#home" className="text-xl font-bold text-white">
              Tejanmayi Gummaraju
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`hover:text-white transition-colors ${
                  item.name === 'GitHub' ? 'text-accent' : 'text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...(item.name === 'GitHub' && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  {...(item.name === 'GitHub' && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 