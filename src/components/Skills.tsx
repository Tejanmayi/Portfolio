import { motion } from 'framer-motion';
import { CpuChipIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "SQL", "JavaScript", "Scala", "GoLang", "C/C++", "NoSQL", "TypeScript", "R"]
    },
    {
      title: "Technologies",
      skills: ["Ruby", "RESTful API", "Kubernetes", "Hadoop", "Kafka", "Jenkins", "CI/CD", "AWS", "GCP"]
    },
    {
      title: "Frameworks",
      skills: ["React", "NodeJS", "JQuery"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "Linux", "PostgreSQL", "MongoDB", "Airflow", "Tableau"]
    },
    {
      title: "Coursework",
      skills: [
        "Data Structures and Algorithm Design",
        "Databases",
        "Big Data",
        "Machine Learning",
        "Artificial Intelligence (AI)",
        "Operating Systems",
        "Distributed Systems",
        "Object-oriented design",
        "Agile",
        "Mathematics and Distributed Storage"
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <CpuChipIcon className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 