import { motion } from 'framer-motion';
import { Camera, Video, Palette } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const services = [
    {
      icon: Video,
      title: "Video Content",
      description: "Engaging short-form videos and product reviews that drive audience connection.",
      color: "blue"
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Aesthetic product and lifestyle shoots capturing brand essence.",
      color: "pink"
    },
    {
      icon: Palette,
      title: "Brand Storytelling",
      description: "Crafting compelling narratives that enhance brand visibility.",
      color: "purple"
    }
  ];

  return (
    <motion.section 
      id="about"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 
            bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-700">
            A 20-year-old UGC creator from Nepal, currently based in South Korea. 
            Specializing in <span className="font-bold text-pink-600">authentic storytelling </span> 
            that connects brands with their audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                delay: index * 0.2 
              }}
              whileHover={{ scale: 1.05 }}
              className={`bg-white p-8 rounded-2xl shadow-lg 
                hover:shadow-xl transition-all group
                border-2 border-transparent hover:border-${service.color}-200`}
            >
              <div className="mb-6 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`p-4 rounded-full bg-${service.color}-100 
                    group-hover:bg-${service.color}-200 transition-colors`}
                >
                  <service.icon 
                    className={`w-12 h-12 text-${service.color}-600 
                      group-hover:text-${service.color}-700 transition-colors`} 
                  />
                </motion.div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 text-${service.color}-600 text-center`}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
