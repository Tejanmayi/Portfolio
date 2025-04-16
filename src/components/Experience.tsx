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
        "Designed 10+ scalable backend features in Ruby on Rails leveraging RESTful methods, effectively supporting over 10K monthly active users.",
        "Created the 'Watch and Earn' feature that improved ad viewership by 20%, resulting in $90k in projected additional revenue.",
        "Optimized Python-based microservices by enhancing Redshift query performance, reducing API latency from 40ms to 10ms.",
        "Built ETL pipelines to store user activities and subscriptions with Python scripts and Airflow DAGs, improving operational efficiency by 20%."
      ]
    },
    {
      title: "Research Assistant",
      company: "Broadridge",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Created a scalable financial document processing pipeline using Python and BeautifulSoup for web scraping and MongoDB for scalable storage.",
        "Integrated OpenAI API to implement Named Entity Recognition using advanced language models like GPT and Llama, achieving 92.8% recall.",
        "Identified relevant paragraphs using BERT embeddings and a Random Forest classifier, achieving high-precision text extraction for the documents."
      ]
    },
    {
      title: "Web and Database Administrator",
      company: "Stony Brook University",
      period: "Jan 2023 - Dec 2023",
      location: "Stony Brook, NY",
      achievements: [
        "Implemented ETL process to ingest and route 1M+ records, reducing manual effort by 40%.",
        "Optimized SQL queries, leveraging indexing and partitioning strategies for efficient data retrieval.",
        "Crafted dynamic web portals using HTML, CSS, JavaScript, and T-SQL to streamline student application profiles."
      ]
    },
    {
      title: "Software Engineer",
      company: "London Stock Exchange Group (Refinitiv)",
      period: "Sept 2020 - May 2022",
      location: "Karnataka, India",
      achievements: [
        "Engineered a suite of automation scripts using Rundeck to execute over 1000 daily system health checks across financial applications, Eikon and Risk reducing manual monitoring effort by 70%.",
        "Collaborated with DevOps and SRE teams to integrate with CI/CD pipelines and configuration tools, ensuring consistent deployments and parity.",
        "Documented operational procedures and troubleshooting guides using Confluence and Jira, reducing average resolution time by 35%."
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