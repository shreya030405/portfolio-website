import { motion } from 'framer-motion';
import { Send, Play } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      }
    }
  };

  return (
    <motion.section
      id='home'
      className="min-h-screen flex items-center justify-center relative overflow-hidden
        bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute bg-blue-200/50 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 2
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth, 
              Math.random() * window.innerWidth, 
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror"
          }}
          style={{
            width: `${20 + Math.random() * 50}px`,
            height: `${20 + Math.random() * 50}px`
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-3xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold 
            bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 
            bg-clip-text text-transparent mb-6"
          variants={textVariants}
        >
          Hi, I'm Shreya!
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-12 
            max-w-2xl mx-auto leading-relaxed"
          variants={textVariants}
        >
          A passionate UGC creator crafting authentic and engaging content 
          for brands worldwide. Let's bring your brand story to life together.
        </motion.p>

        <motion.div 
          className="flex justify-center gap-6"
          variants={containerVariants}
        >
          <motion.a
            href="#portfolio"
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 
              text-white rounded-full overflow-hidden flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariants}
          >
            <Send className="w-5 h-5" />
            <span>See My Work</span>
            <motion.div 
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
            />
          </motion.a>

          <motion.a
            href="#contact"
            className="group relative px-8 py-4 border-2 border-blue-900 
              text-blue-900 rounded-full flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={textVariants}
          >
            <Play className="w-5 h-5" />
            <span>Contact Me</span>
            <motion.div 
              className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
