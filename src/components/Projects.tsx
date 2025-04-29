import { motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: "Contacts and Notes CRUD API",
      description: "Secure RESTful Notes and Contacts management service with JWT authentication, CRUD support, rate limiting, retries, and field normalization.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "JWT", "Pydantic", "REST"],
      features: [
        "JWT-based authentication",
        "CRUD operations for Contacts and Notes",
        "Rate limiting with exponential backoff",
        "Event-driven note processing using Celery",
        "Field normalization for note data",
        "Comprehensive error handling",
        "Interactive API documentation (Swagger UI)",
      ],
      githubUrl: "https://github.com/Tejanmayi/contacts-notes-crud-api"
    },
    {
      title: "Mental Health Assistant",
      description: "A full stack mental health assistant web application using React, Node.js, and PostgreSQL, featuring a fine-tuned RoBERTa model for depression classification.",
      technologies: ["React", "Node.js", "PostgreSQL", "LLM", "Machine Learning"],
      features: [
        "Real-time risk assessment for counselors",
        "Fine-tuned RoBERTa model for depression classification",
        "Secure user authentication and data storage",
        "Responsive and accessible user interface"
      ],
      githubUrl: "https://github.com/tejanmayi/mental-health-assistant"
    },
    {
      "title": "Personalized Roadmap Progress Tracking API",
      "description": "A cloud-based API for creating, managing, and tracking personalized learning roadmaps with JWT authentication, caching, and detailed analytics.",
      "technologies": ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "NodeCache"],
      "features": [
        "JWT-based user authentication",
        "Create, update, and manage personalized learning roadmaps",
        "Resource management with support for multiple types",
        "Progress tracking with module completion, achievement system",
        "Analytics dashboard for progress statistics and resource usage",
        "Caching for frequently accessed data and optimistic locking",
        "Interactive API documentation (Swagger UI)"
      ],
      "githubUrl": "https://github.com/tejanmayi/personalized-roadmap-api"
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
      ],
      githubUrl: "https://github.com/tejanmayi/morse-decoder"
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
      ],
      githubUrl: "https://github.com/tejanmayi/Musicverse"
    },
    {
      title: "Reddit Community Insights Pipeline",
      description: "A data pipeline that extracts posts and comments from Reddit's Data Engineering community, processes them using AWS services, and enables trend analysis and community insights through dbt transformations.",
      technologies: ["Reddit API", "AWS S3", "Redshift", "dbt", "Airflow", "Terraform", "Git"],
      features: [
        "Data ingestion from Reddit API",
        "Data transformation and loading into Redshift",
        "dbt models for analytics",
        "Airflow orchestration",
        "Terraform infrastructure as code"
      ],
      githubUrl: "https://github.com/tejanmayi/Reddit-API-Pipeline"
    },
    {
      title: "Prediction of Liver Disease Patients",
      description: "Inspected and diagnosed the optimum preprocessing steps to be applied on liver patients data set achieving 95% accuracy in classification.",
      technologies: ["Python", "R", "PySwarm", "J48", "Random Forest", "SVM", "pandas", "scikit-learn", "matplotlib", "seaborn"],
      features: [
        "Published in ERCICA'20, Vol 1",
        "Data normalization",
        "PySwarm optimization",
        "Feature extraction",
        "Classification algorithms",
        "Secured 1st place in poster presentation"
      ],
      githubUrl: "https://github.com/tejanmayi"
    }
  ];

  return (
    <section id="projects" className="section flex items-center">
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <CodeBracketIcon className="h-6 w-6 text-accent mr-2" />

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      <h3 className="text-xl font-semibold text-white hover:text-accent/80 transition-colors">{project.title}</h3>
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
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
                  <h4 className="text-sm font-semibold text-accent mb-2">Features</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
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