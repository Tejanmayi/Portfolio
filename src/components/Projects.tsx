import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Mental Health Assistant",
      description: "A full stack mental health assistant web application using React, Node.js, and PostgreSQL, featuring a fine-tuned RoBERTa model for depression classification.",
      technologies: ["React", "Node.js", "PostgreSQL", "LLM", "Machine Learning"],
      features: [
        "Real-time risk assessment for counselors",
        "Fine-tuned RoBERTa model for depression classification",
        "Secure user authentication and data storage",
        "Responsive and accessible user interface"
      ]
    },
    {
      title: "Multi-Language Morse Code Converter",
      description: "An innovative application that converts speech to Morse code and supports translation across multiple languages.",
      technologies: ["Python", "pyaudio", "gTTS", "Google Cloud APIs"],
      features: [
        "Support for over 100 languages",
        "Real-time speech-to-text conversion",
        "Error handling for language processing",
        "User-friendly interface"
      ]
    },
    {
      title: "Musicverse: Real-Time Analytics Pipeline",
      description: "A comprehensive analytics pipeline for music service simulation on GCP, analyzing user behavior and generating visualizations.",
      technologies: ["Kafka", "Spark Streaming", "dbt", "BigQuery", "GCP"],
      features: [
        "Real-time data streaming and processing",
        "User behavior analysis",
        "Data Studio visualizations",
        "Scalable cloud infrastructure"
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <CodeBracketIcon className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 