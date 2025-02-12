import { motion } from 'framer-motion';
import { 
  Instagram, 
  Mail,
  Copyright 
} from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Instagram className="w-6 h-6" />, 
      href: "https://instagram.com/shrey.augccreator",
      color: "hover:text-pink-500"
    },
    { 
      icon: <SiTiktok className="w-6 h-6" />, 
      href: "https://tiktok.com/@shreya_ugccreator",
      color: "hover:text-red-600"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:shreyaugc004@gmail.com",
      color: "hover:text-cyan-600"
    }

  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-pink-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shreya UGC
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Crafting authentic content that tells your brand's unique story.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition duration-300 ${link.color}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center items-center space-x-2 text-sm text-white/70 mb-4">
            <Copyright className="Commercial	
        w-4 h-4" />
            <span>{new Date().getFullYear()} Shreya UGC. All Rights Reserved.</span>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-12 text-center text-xs text-white/50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <span className="mr-2">Designed and Developed by</span>
        <a className="" href='https://x0samnan-portfolio.vercel.app' target='_blank'>Samnan</a>
      </motion.div>
    </footer>
  );
};

export default Footer;
