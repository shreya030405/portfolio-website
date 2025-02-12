import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Home, UserCheck, Briefcase, MessageCircle, Zap 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      href: "#home", 
      label: "Home", 
      icon: Home,
      gradient: "from-blue-600 to-purple-600"
    },
    { 
      href: "#about", 
      label: "About", 
      icon: UserCheck,
      gradient: "from-purple-600 to-pink-600"
    },
    { 
      href: "#portfolio", 
      label: "Portfolio", 
      icon: Briefcase,
      gradient: "from-pink-600 to-blue-600"
    },
    { 
      href: "#contact", 
      label: "Contact", 
      icon: MessageCircle,
      gradient: "from-blue-600 to-green-600"
    }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 
        bg-white/80 backdrop-blur-md shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
        style={{ 
          width: `${scrollProgress}%`,
          transformOrigin: 'left center'
        }}
      />

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#home" 
            className="flex items-center gap-2 font-bold text-xl 
              bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent"
          >
            <Zap className="text-blue-600" />
            Shreya UGC
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.li 
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 
                  rounded-full hover:bg-gradient-to-r hover:from-blue-50 hover:to-pink-50 
                  transition-all group"
              >
                <item.icon 
                  className={`text-gray-600 group-hover:text-transparent 
                    group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.gradient}`} 
                />
                <span className="text-gray-700">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-white/90 backdrop-blur-lg z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="flex flex-col items-center justify-center h-full space-y-8">
                {navItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 text-2xl 
                        hover:text-transparent hover:bg-clip-text 
                        hover:bg-gradient-to-r from-blue-600 to-pink-600"
                    >
                      <item.icon className="w-8 h-8" />
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
