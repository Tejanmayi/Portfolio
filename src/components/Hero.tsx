import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile_photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="section flex items-center">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left md:w-1/2 md:pl-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm{' '}
              <span className="text-accent">Tejanmayi Gummaraju</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Software Engineer 
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              I'm a passionate software engineer with expertise in building scalable applications
              and solving complex problems. 
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn bg-secondary hover:bg-secondary/90"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent">
                <img
                  src={profilePhoto}
                  alt="Tejanmayi Gummaraju"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 