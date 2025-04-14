import { motion } from 'framer-motion';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer - Backend",
      company: "Miles",
      period: "Oct 2024 – Feb 2025",
      location: "Redwood City, CA",
      achievements: [
        "Designed 10+ scalable backend features in Ruby on Rails leveraging RESTful methods, effectively supporting over 10K monthly active users",
        "Created the 'Watch and Earn' feature that improved ad viewership by 20%, resulting in $90k in projected additional revenue",
        "Optimized Python-based microservices by enhancing Redshift query performance, reducing API latency from 40ms to 10ms",
        "Built ETL pipelines to automate user activity updates and data processing with Python scripts and Airflow DAGs, improving operational efficiency by 20%"
      ]
    },
    {
      title: "Research Assistant",
      company: "Broadridge",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Developed web scraping solutions using BeautifulSoup in Python to extract financial data, and utilized MongoDB to enhance data storage and scalability",
        "Integrated OpenAI API to implement Named Entity Recognition using advanced language models like GPT and Llama, achieving 92.8% recall"
      ]
    },
    {
      title: "Web and Database Administrator",
      company: "Stony Brook University",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Implemented ETL process to ingest and route 1M+ records, reducing manual effort by 40%",
        "Crafted dynamic web portals using HTML, CSS, JavaScript, and T-SQL to streamline student application profiles"
      ]
    },
    {
      title: "Software Engineer",
      company: "London Stock Exchange Group (Refinitiv)",
      period: "Sept 2020 - May 2022",
      location: "Karnataka, India",
      achievements: [
        "Utilized Compass and Grafana to monitor and identify performance degradation factors within financial applications",
        "Pioneered swift server actions and facilitated optimal product maintenance, leading to a 25% reduction in downtime",
        "Provided 3-tier technical support including troubleshooting, performance optimization, and bug fixing"
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-accent mr-2" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400">
                      <span>{exp.company}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 