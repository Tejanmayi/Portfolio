import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="section flex items-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
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
      </div>
    </section>
  );
};

export default Hero; 