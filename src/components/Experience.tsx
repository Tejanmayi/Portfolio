import { motion } from 'framer-motion';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Miles",
      period: "Oct 2024 – Feb 2025",
      location: "Redwood City, CA",
      achievements: [
        "Architected 10+ scalable Ruby on Rails backend features with RESTful APIs, supporting over 10K monthly active users.",
        "Engineered the revenue-generating 'Watch and Earn' feature, increasing ad engagement by 20% and driving $90K in projected additional revenue.",
        "Slashed API latency by 75% by optimizing Python microservices and tuning Redshift queries, reducing response time from 40ms to 10ms.",
        "Automated critical data workflows by building Python-based Airflow ETL pipelines that processed millions of daily events, improving operational efficiency by 20%."
      ]
    },
    {
      title: "Research Assistant",
      company: "Broadridge",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Built Python web scrapers with BeautifulSoup for financial data extraction, storing results in MongoDB for efficient querying and analysis.",
        "Deployed a Named Entity Recognition microservice using OpenAI and Meta APIs via custom Python middleware, cutting API costs by 40% while maintaining 92.8% recall accuracy."
      ]
    },
    {
      title: "Web and Database Administrator",
      company: "Stony Brook University",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Architected scalable ETL pipelines using Python that processed over 1M records, reducing manual data handling by 40%",
        "Implemented database optimization strategies and query performance tuning, resulting in 30% faster data retrieval for critical administrative applications",
        "Crafted dynamic web portals using HTML, CSS, JavaScript, and T-SQL to streamline student application profiles."
      ]
    },
    {
      title: "Software Engineer",
      company: "London Stock Exchange Group (Refinitiv)",
      period: "Sept 2020 - May 2022",
      location: "Karnataka, India",
      achievements: [
        "Optimized PostgreSQL database queries through proper indexing and query restructuring, reducing average response time from 200ms to 40ms and boosting system throughput by 160%.",
        "Developed and deployed real-time system monitoring infrastructure using Prometheus, Grafana, and Python to capture and visualize key metrics.",
        "Designed and implemented RESTful API gateways with JWT authentication and rate limiting, securely handling 5M+ daily requests while ensuring financial data compliance."
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "Avekshaa Technologies",
      period: "Jun 2018 - Aug 2018",
      location: "Bengaluru, India",
      achievements: [
        "Developed a machine learning-powered analytics solution using K-means clustering and feature engineering.",
        "Automated the analysis of website usage patterns and reduced weekly processing time by 15 hours.",
        "Designed Power BI dashboards to visualize user behavior insights reducing marketing costs by 25%."
      ]
    }
  ];

  return (
    <section id="experience" className="section flex items-center">
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
                    <li
                    key={idx}
                    className="list-disc ml-6 pl-2 marker:text-accent"
                    style={{ textIndent: '-1.5rem', paddingLeft: '1.75rem' }}
                    >
                      {achievement}
                    </li>
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